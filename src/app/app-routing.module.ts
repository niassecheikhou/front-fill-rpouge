import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ClientModule } from './client/client.module';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [
  
  {path: '', redirectTo: "/catalogue",pathMatch:"full"},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'details_burger',component: DetailBurgerComponent },
  {path: 'panier',component:PanierComponent},
  {path: 'detail_menu/:id',component:DetailMenuComponent},
  {path: 'liste_commande',component:ListeCommandeComponent},
  {path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },

]

@NgModule({
  imports: [AdminModule,ClientModule ,RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
  
 }
