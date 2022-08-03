import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenu } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu!:any;
  // id!: number
  
  constructor(private sanitizer:DomSanitizer ,
    private menuService:MenuService,
    private router:Router,
  
    private route: ActivatedRoute)  { }

  ngOnInit(): void {

    // let id = this.route.snapshot.paramMap.get('id');
     this.menuService.getAllMenus().subscribe(data=>{
      this.menu=data
      // console.log(this.menu)
     })
  }

  convertImgon(param: string){
    return this.menuService.convertImg( param) 
  }

    // detailMenu(){

    // this.router.navigateByUrl(`detail_menu/${this.menuTab.id}`);
      
    // }

  
	
}
