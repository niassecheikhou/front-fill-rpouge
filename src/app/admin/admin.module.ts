import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { AddProduitsComponent } from './produits/add-produits/add-produits.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ListeZonesComponent } from './commandes/liste-zones/liste-zones.component';
import { CommandesZoneComponent } from './commandes/commandes-zone/commandes-zone.component';
import { CommandesClientComponent } from './clients/commandes-client/commandes-client.component';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [
    AdminComponent,
    ListeProduitsComponent,
    AddProduitsComponent,
    LivraisonsComponent,
    ListeZonesComponent,
    CommandesZoneComponent,
    ClientsComponent,
    CommandesClientComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
