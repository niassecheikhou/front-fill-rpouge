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

  addToCartAndRemove(product: IBurger, action:'in' | 'out'  = 'in') {
    this.items$.pipe(
      take(1),
      map((products) => {

        if (action==='in'){
          let tab=JSON.parse(localStorage.getItem('products')|| '[]');
          if (tab) {
            let trouve = tab.find((para :{id: number}) =>para.id==product.id)
            if (!trouve) {
              product.qantiteCommander=1
              products.push(product);
            }else{
              products.forEach(element=>{
                if(element.id==product.id){
                  element.qantiteCommander++
                }
              })
            }
          }
        }else{
          products.splice(products.indexOf(product), 1);
        }
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
}

}
  

