import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurger } from '../models/burger.model';
import { ICatalogue } from '../models/catalogue-burger.model';
import { IMenu } from '../models/menu.model';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  burgers!: IBurger[];
  menus!: IMenu[];

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  

    this.catalogueService.getCatalogueObs().subscribe((data:ICatalogue)=>{
      console.log(data);
      this.burgers = data.burgers;
      this.menus = data.menus;

      console.log(this.burgers);
      console.log(this.menus);
    })
  }







}
