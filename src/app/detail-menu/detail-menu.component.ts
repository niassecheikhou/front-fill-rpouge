import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBurger } from '../models/burger.model';
import { IMenu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {
menus!:any;
menu!:IMenu
burgers!:IBurger[]
tab!:any[];
parameters!: number;
param!:string;


  constructor(private menuService: MenuService,private route:ActivatedRoute ){ }

  ngOnInit(): void {
    // console.log(this.menus)
    
    // this.menus=this.menuService.getOneMenu(this.parameters)
    this.menuService. getAllMenus().subscribe(data=>{
      this.tab=data;
      // console.log(this.tab)
    })
     this.parameters = this.route.snapshot.params['id']
     console.log(this.parameters)
  }

 

}
