import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly client_url = "http://127.0.0.1:8000/api/clients"

  constructor(private http: HttpClient) { }



  getAllClient():Observable<any>{
    return this.http.get<any>(this.client_url)
  }
}
