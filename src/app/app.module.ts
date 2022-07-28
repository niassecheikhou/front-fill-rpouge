import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CatalogueBurgerComponent } from './catalogue-burger/catalogue-burger.component';
import { CatalogueListBurgerComponent } from './catalogue-list-burger/catalogue-list-burger.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BurgerComponent } from './burger/burger.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';

import { AppRoutingModule } from './app-routing.module';
import { ProduitComponent } from './produit/produit.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueBurgerComponent,
    CatalogueListBurgerComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    DetailBurgerComponent,
    ProduitComponent,
    BurgerComponent,
    PanierComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
