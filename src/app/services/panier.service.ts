import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IBurger } from '../models/burger.model';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

   
    
  constructor() {
    
    let existingCartItems = JSON.parse(localStorage.getItem('products')|| '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);

  }

  private itemsSubject = new BehaviorSubject<IBurger[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: IBurger) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();

    
  
}
}
  

