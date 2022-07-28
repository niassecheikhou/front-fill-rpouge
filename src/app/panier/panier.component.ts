import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBurger } from '../models/burger.model';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
 
  
  
  constructor(private panierService:PanierService) {
  }
  ngOnInit(): void {
    
  }
  
  items$?: Observable<IBurger[]>=this.panierService.items$;
  // this.cartItems = this.panierService.getItemFormCart();

  // constructor(private panier: PanierService) { 
  //   this.cartItems = this.panier.getItemsFromCart();
  //   this.prods = this.panier.getCartCount();
  // }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.prods = this.panier.getCartCount();
  //     console.log("nombre produits dans le panier : ",this.panier);
  //   }, 200);
  // }

  // handelRemoveItem = (product: IBurger) => {
  //   this.panier.removeFromCart(product);
  //   this.cartItems = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }

  // handleIncrement = (product: IBurger) => {
  //   this.panier.addItemsToCart(product);
  //   this.cartItems = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }

  // handleDecriment = (product: IBurger) => {
  //   this.panier.decrementFromCart(product);
  //   this.cartItems = this.panier.getItemsFromCart();
  //   this.cartTotalValue =  this.panier.getTotalAmount();
  // }
  

}
