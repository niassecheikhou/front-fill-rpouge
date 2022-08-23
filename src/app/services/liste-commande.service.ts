import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeCommandeService {

  private readonly comm_url="http://127.0.0.1:8000/api/commandes";
  private readonly one_url="http://127.0.0.1:8000/api/commandes/";

private readonly  livraison_url ="http://127.0.0.1:8000/api/livraisons" 

private readonly  zone_url="http://127.0.0.1:8000/api/zones" 

private readonly one_zone ="http://127.0.0.1:8000/api/zones/"

  constructor(private http: HttpClient) { }


  getAllCommandes(): Observable<any>{
    return this.http.get<any>(this.comm_url)
  }
  
  getOneCommandes(id:number): Observable<any>{
    return this.http.get<any>(this.one_url+id)
  }

  getAllLivraisons():Observable<any>{
    return this.http.get<any>(this.livraison_url)
  }

  getAllZone():Observable<any>{
    return this.http.get<any>(this.zone_url)
  }

  getOneZone(id:number): Observable<any>{
   return  this.http.get<any>(this.one_zone + id)
  }
  
}
