import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';


@NgModule({
  declarations: [
    ClientComponent,
    ListClientComponent,
    CommandeClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
