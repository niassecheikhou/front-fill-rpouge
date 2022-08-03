import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [
  {path: '', component: CatalogueComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'details_burger',component:DetailBurgerComponent },
  {path: 'panier',component:PanierComponent},
  {path: 'detail_menu/:id',component:DetailMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
