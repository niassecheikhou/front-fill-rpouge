import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
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
import { CartPanierComponent } from './cart-panier/cart-panier.component';
import { DetailMenuComponent } from './detail-menu/detail-menu.component';
import { BoissonComponent } from './detail-menu/boisson/boisson.component';
import { FritteComponent } from './detail-menu/fritte/fritte.component';
import { ZoneComponent } from './detail-menu/zone/zone.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitCarteComponent } from './catalogue/produit-carte/produit-carte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    DetailBurgerComponent,
    ProduitComponent,
    BurgerComponent,
    PanierComponent,
    MenuComponent,
    CartPanierComponent,
    DetailMenuComponent,
    BoissonComponent,
    FritteComponent,
    ZoneComponent,
    CatalogueComponent,
    ProduitCarteComponent,
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
