import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IMenu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private readonly menu_url = "http://127.0.0.1:8000/api/menus";
  menuTab :IMenu[]=[]
  

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  getAllMenus():Observable<any>{
    return this.http.get<any>(this.menu_url)
  }

  convertiGetAllMenuEnTab(){
    this.getAllMenus().subscribe(d=>{
     this.menuTab =d;
    })
    return  this.menuTab
  }

  convertImg(param: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, "+param); 
  }

  getOneMenu(productId:any) {
    
    return this.convertiGetAllMenuEnTab().find(params => params.id === productId)
  }
}
