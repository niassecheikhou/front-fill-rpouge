import { Component, OnInit } from '@angular/core';
import { ListeCommandeService } from 'src/app/services/liste-commande.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.scss']
})
export class LivraisonsComponent implements OnInit {
  tablivraisons:any[]=[];
  tabels:any[]=[]
  meslivraison :any[]=[]
  constructor(private livraison:ListeCommandeService) { }

  ngOnInit(): void {

   this.getAllLivraisons()
  }

    getAllLivraisons(){
      this.livraison.getAllLivraisons().subscribe(livraison =>{
        // console.log(livraison)
        this.tablivraisons = livraison
         this.tablivraisons.forEach(element=>{
          this.tabels = element.commandes
          this.tabels.forEach(ele=>{
            this.meslivraison.push(ele)
            // console.log(this.meslivraison)
          })
         })
      })
    }

}
