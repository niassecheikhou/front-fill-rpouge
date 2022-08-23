import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommande } from '../models/commande.model';

import { ListeCommandeService } from '../services/liste-commande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit {

  tabCommande:any[]=[];
  obClient!:any;
  obComm!:any;
  mestel!:any;
  mesProduits:any[]=[];

  constructor(private liste: ListeCommandeService ,private router: Router) { }

  ngOnInit(): void {
   this. getAllCommandes()
  }

  getAllCommandes(){
    this.liste.getAllCommandes().subscribe(commande =>{
      this.tabCommande = commande;
      // console.log(commande)
      this.tabCommande.forEach(tab=>{
        this.obClient = tab.client
        this.mesProduits = tab.Produits
        this.mestel = this.obClient.telephone
       this.mesProduits.forEach((produit=>{
        
        // console.log(produit)
       }))
       })
    })
  }
  
  detaileCommande(commande: ICommande){
    this.router.navigateByUrl('commandes/'+commande.id)
  }

}
              