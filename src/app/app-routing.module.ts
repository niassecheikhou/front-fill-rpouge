import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueBurgerComponent } from './catalogue-burger/catalogue-burger.component';
import { CatalogueListBurgerComponent } from './catalogue-list-burger/catalogue-list-burger.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [
  {path: '', component: CatalogueBurgerComponent},
  {path: 'burgers', component: CatalogueListBurgerComponent},
  {path: 'details_burger',component:DetailBurgerComponent },
  {path: 'panier',component:PanierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
