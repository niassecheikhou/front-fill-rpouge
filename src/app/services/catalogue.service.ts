
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ICatalogue } from '../models/catalogue-burger.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  private readonly burger_url = "http://127.0.0.1:8000/api/burgers";
  private readonly catalogue_url = "http://127.0.0.1:8000/api/catalogues";
  private readonly OneBurger_url = "http://127.0.0.1:8000/api/burgers/";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }


  // getAllBurgers(): Observable<any> {

  //   return this.http.get<any>(this.burger_url)

  //   // const data= this.http.get<any>(this.menu_url)()
  // }

  // getCatalogueBurger(): Observable<any> {
  //   return this.http.get<any>(this.catalogue_url)
  // }

  convertImg(param: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, " + param);
  }

  getCatalogueObs(): Observable<ICatalogue> {
    return this.http.get<ICatalogue>(this.catalogue_url)
  }


}
