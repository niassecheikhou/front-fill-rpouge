import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeCommandeService } from 'src/app/services/liste-commande.service';

@Component({
  selector: 'app-commandes-client',
  templateUrl: './commandes-client.component.html',
  styleUrls: ['./commandes-client.component.scss']
})
export class CommandesClientComponent implements OnInit {


  id:number= +this.route.snapshot.params['id'];
  constructor(private CommandeClient:ListeCommandeService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.CommandeClient.getOneCommandes(this.id).subscribe(params =>{
      console.log(params)
    })
  }

}
