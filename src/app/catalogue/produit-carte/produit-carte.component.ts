import { Component, Input, OnInit } from '@angular/core';
import { IBurger } from 'src/app/models/burger.model';
import { IMenu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-produit-carte',
  templateUrl: './produit-carte.component.html',
  styleUrls: ['./produit-carte.component.scss']
})
export class ProduitCarteComponent implements OnInit {

  @Input()
  produit!: IMenu | IBurger;
  constructor() { }

  ngOnInit(): void {
  }



  isMenu(produit: any) {
    return produit.burgers ? true : false
  }

}
