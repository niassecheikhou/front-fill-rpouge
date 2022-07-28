import { Component, Input, OnInit } from '@angular/core';
import { CatalogueBurger } from '../models/catalogue-burger.model';
import { IBurger } from '../models/burger.model';
import { CatalogueService } from '../services/catalogue.service';



@Component({
  selector: 'app-catalogue-burger',
  templateUrl: './catalogue-burger.component.html',
  styleUrls: ['./catalogue-burger.component.scss']
})
export class CatalogueBurgerComponent implements OnInit {
  @Input()  catalogueburgers!: CatalogueBurger;
  @Input()  iburger!: IBurger[];
 
/*
 burgers:string[]= ['buregers1','burgers2','buregers3','burgers4'];
 menus:string[]= ['menus1','nemus2','menus3','nemus4'];
 */
  buttonText!: string;
  constructor(private serciveBurger: CatalogueService) {}
  
  ngOnInit(): void {
    this.buttonText='details'

    this.serciveBurger.getAllBurgers().subscribe(data=>{
      console.log(data);
    });
  }

  

}
