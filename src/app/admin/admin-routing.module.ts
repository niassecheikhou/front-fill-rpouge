import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCommandeComponent } from '../liste-commande/liste-commande.component';
import { ClientsComponent } from './clients/clients.component';
import { CommandesClientComponent } from './clients/commandes-client/commandes-client.component';
import { CommandesZoneComponent } from './commandes/commandes-zone/commandes-zone.component';

import { CommandesComponent } from './commandes/commandes.component';
import { ListeZonesComponent } from './commandes/liste-zones/liste-zones.component';
import { OneCommandeComponent } from './commandes/one-commande/one-commande.component';

import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { AddProduitsComponent } from './produits/add-produits/add-produits.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';


const routes: Routes = [
  
  { path: '', component: ListeCommandeComponent},
  { path: 'commandes' ,children: 
  [
  { path: '', component:  ListeCommandeComponent },
  { path: 'zone', component:  ListeZonesComponent },
  { path: ':id', component:  OneCommandeComponent },
  { path: 'zone/:id', component: CommandesZoneComponent},
 
  ]},
  { path: 'produits' ,children: 
  [
  { path: '', component: ListeProduitsComponent},
  { path: 'new', component: AddProduitsComponent},

  ]},
  { path: 'livraisons' ,children: 
  [
    { path: '', component: LivraisonsComponent},
  { path: ':id', component:LivreurComponent},
  { path: 'livreur/:id', component: ListeProduitsComponent},

  ]},
  {path: 'clients' ,children:
  [
  {path: '', component: ClientsComponent },
  {path: ':id', component: CommandesClientComponent }
  ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
