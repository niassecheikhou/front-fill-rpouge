import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBurger } from '../models/burger.model';
import { ICatalogue } from '../models/catalogue-burger.model';
import { MenuService } from '../services/menu.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
 
  somm:number =0;
  qty=1;
  postId:any
  
  items$: Observable<IBurger[]>=this.panierService.items$;
  constructor(private panierService:PanierService ,
    private http: HttpClient,
    private menuService: MenuService,
    ) {

   
    
  }
  
  ngOnInit(): void {
    this.items$.subscribe(value=>{
      value.forEach(item=>{
        this.somm += +item.prix;
      })
    });

    // this.getFrites()
  }
  

  removeFromPanier(panier:IBurger){
    this.panierService.addToCartAndRemove(panier,'out')
  }

  
  tabCommande:any[]=[];
  getPanier(){
    console.log(this.panierService. getPanier())    
    // console.log(this.tabCommande);

      this.tabCommande.forEach(panel=>{
        // console.log(panel)
        this.tabCommande.push({
        "qantiteCommander": panel.qantiteCommander,
        "produit": "/api/produits/"+panel.id
        })
        return this.tabCommande;
      })
  }

  //  StructureCommande(){
  //   this.panierService.getPanier().
  sendCommande(){
  this.http.post<any>('http://127.0.0.1:8000/api/commandes', 
  {
    "Produits":this.tabCommande
  }
  ).subscribe(data => {
    
    this.postId = data.id;
  })
  
      // console.log(this.postId);
       this.postId;
  }

  // tabfrite:any[]=[]
  // getFrites(){
  //   this.menuService.getFrites().subscribe(data => {
  //     console.log(data)
  //     this.tabfrite = data
  //     // console.log(this.tabfrite)
  //   })
  // }
    

  
  
}


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
  
