import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICommande } from 'src/app/models/commande.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  mesclients:any[]=[]
  constructor(private clients:ClientService,private router: Router) { }

  ngOnInit(): void {
    this.clients.getAllClient().subscribe(client =>{
      this.mesclients =client
      // console.log(this.mesclients)
    })
  }
  detaileCommandeClient(client:ICommande){
    this.router.navigateByUrl('admin/clients/'+client.id) 
  }

}
