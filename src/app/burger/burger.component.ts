
import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from '../models/burger.model';
import { PanierService } from '../services/panier.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  
  @Input()
   burger!: IBurger;
  constructor(private panierService:PanierService ) { }

  ngOnInit(): void {
  }

  addToCart(burger:any){
    this.panierService.addToCart(this.burger);
  }

}
