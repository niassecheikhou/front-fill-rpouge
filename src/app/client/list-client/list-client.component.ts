import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommande } from 'src/app/models/commande.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  mesclients:any[]=[]

  constructor(private clients:ClientService,private router: Router) { }

  ngOnInit(): void {
    // this.clients.getAllClient().subscribe(client =>{
    //   this.mesclients =client
    //   // console.log(this.mesclients)
    // })

  }

  // detaileCommandeClient(client:ICommande){
  //   this.router.navigateByUrl('detail/commande/'+client.id)
  // }

}
