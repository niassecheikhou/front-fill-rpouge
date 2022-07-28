
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  
  getCatalogueBurger() {
    throw new Error('Method not implemented.');
  }

  private readonly burger_url ="http://127.0.0.1:8000/api/burgers";
  private readonly catalogue_url = "http://127.0.0.1:8000/api/catalogues";
  private readonly OneBurger_url = "http://127.0.0.1:8000/api/burgers/";

  constructor(private http: HttpClient) { }


  getAllBurgers():Observable<any>{
   
  return this.http.get<any>(this.burger_url)
    // const data= this.http.get<any>(this.menu_url)()

  }
 

}
