import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeClientComponent } from './commande-client/commande-client.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

// CommandeClientComponent