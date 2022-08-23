import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from 'src/app/models/burger.model';
import { IMenu } from 'src/app/models/menu.model';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-produit-carte',
  templateUrl: './produit-carte.component.html',
  styleUrls: ['./produit-carte.component.scss']
})
export class ProduitCarteComponent implements OnInit {

  @Input()
  produit!: IMenu | IBurger;
  burger!: IBurger;
  constructor(private panierService:PanierService,private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    
  }

  addToCart(produit:any){
    this.panierService.addToCartAndRemove(produit);
  }

  isMenu(produit: any) {
    return produit.burgers ? true : false
  }
  convertImg(param: string){
    return this.catalogueService.convertImg( param) 
  }

  isBurger(produit:any){
    return produit.menus ? true : false;
  }

}
