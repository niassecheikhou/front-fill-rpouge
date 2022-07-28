import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from '../models/burger.model';
import { CatalogueBurger } from '../models/catalogue-burger.model';
import { IMenu } from '../models/menu.model';
import { CatalogueService } from '../services/catalogue.service';
import { MenuService } from '../services/menu.service';




@Component({
  selector: 'app-catalogue-list-burger',
  templateUrl: './catalogue-list-burger.component.html',
  styleUrls: ['./catalogue-list-burger.component.scss']
})
export class CatalogueListBurgerComponent implements OnInit {
/* 
 @Input() 
 produit!: string;
*/

  burgers!: IBurger[];
  menus!: IMenu[];

  constructor(private catalogueService: CatalogueService ,private menuService: MenuService) { }
  catalogueburgers: CatalogueBurger[]=[];
 

  ngOnInit(): void {

    // this.catalogueService.getCatalogueBurger()

    this.catalogueService.getAllBurgers().subscribe(d=>{
      this.burgers=d;
      
      
    });

    this.menuService.getAllMenus().subscribe(b=>{
      this.menus=b;
    });
   
   
  }


}
