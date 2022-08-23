import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeCommandeService } from 'src/app/services/liste-commande.service';

@Component({
  selector: 'app-one-commande',
  templateUrl: './one-commande.component.html',
  styleUrls: ['./one-commande.component.scss']
})
export class OneCommandeComponent implements OnInit {
  oneComm: any;
  produts!:any[];
  product!:any;
  id:number= +this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute ,private listeCommandeService:ListeCommandeService ) { }

  ngOnInit(): void {
    this.listeCommandeService.getOneCommandes(this.id).subscribe(params =>{
      console.log(params);
       this.oneComm = params
    
    })

  }


 

}
