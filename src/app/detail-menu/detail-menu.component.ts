import { Component, OnInit,  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IBurger } from '../models/burger.model';
import { IMenu } from '../models/menu.model';
import { CatalogueService } from '../services/catalogue.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {
menu!:any;
menus!:IMenu[];
burgers!:IBurger[]
tab!:any[];
param!:string;
menutab!:any;
menutab2:any[]=[];
menuObs!:any;
taille!:any;
mesTailles:any[]=[]
mesBoissons:any[]=[];
elBoissons:any[]=[];
elburgers:any[]=[]

  constructor(private menuService: MenuService,private route:ActivatedRoute,
              private catalogueService:CatalogueService,
              private sanitizer: DomSanitizer) { 
      this.route.queryParams.subscribe(params => {
        this.menu = params;
        
    });
  }

  ngOnInit(): void {
    // console.log(this.menus)
    
    // this.menus=this.menuService.getOneMenu(this.parameters)
    this.menuService. getAllMenus().subscribe(data=>{
      this.tab=data;
      // console.log(this.tab)
    })
   
     const parameters = +(this.route.snapshot.params['id']);
    this.catalogueService.getCatalogueObs().subscribe((data:any)=>{
     
      this.menutab = data['menus']
      // this.menus = data.menus;
     this.menuObs = this.catalogueService.getOneMenu(this.menutab,parameters)
    //  console.log(this.menuObs)
      this.taille = (this.menuObs['tailles'])
      this.mesTailles = this.taille
      this.mesTailles.forEach(element => {
        this.elBoissons = element.taille.boissons
        // console.log(this.mesBoissons)
      })
      this.menutab2 =data['burgers']
      this.menutab2.forEach(el =>{
        this.elburgers = el;
      })
      
    })
    // console.log(this.menus)
  }
  convertImg(param: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpg;base64, "+param); 
  }

  isMoins(){

  }

 

}
