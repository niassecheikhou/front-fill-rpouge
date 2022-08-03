
import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from '../models/burger.model';
import { CatalogueService } from '../services/catalogue.service';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  
  @Input()
   burger!: IBurger;
  constructor(private panierService:PanierService ,private catalogueService:CatalogueService) { }

  ngOnInit(): void {
  }

  addToCart(burger:any){
    this.panierService.addToCartAndRemove(this.burger);
  }

   convertImg(param: string){
    return this.catalogueService.convertImg( param) 
  }

}
