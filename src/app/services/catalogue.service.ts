
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ICatalogue } from '../models/catalogue-burger.model';
import { IMenu } from '../models/menu.model';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  private readonly burger_url = "http://127.0.0.1:8000/api/burgers";
  private readonly catalogue_url = "http://127.0.0.1:8000/api/catalogues";
  

  constructor(private http: HttpClient, private sanitizer: DomSanitizer,private panierService:PanierService ) { }



  convertImg(param: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, " + param);
  }

  getCatalogueObs(): Observable<ICatalogue> {
    return this.http.get<ICatalogue>(this.catalogue_url)
  }

    getOneMenu(menus:IMenu[],id:number) : IMenu
    {
      let menu=menus.find(menuF => menuF.id == id);
      if (!menu) 
      {
        throw new Error('menu not found')
      }
      else
      {
        return menu;
      }
    }
}



  // getAllBurgers(): Observable<any> {

  //   return this.http.get<any>(this.burger_url)

  //   // const data= this.http.get<any>(this.menu_url)()
  // }

  // getCatalogueBurger(): Observable<any> {
  //   return this.http.get<any>(this.catalogue_url)
  // }