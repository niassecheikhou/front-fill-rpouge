import { Component, Input, OnInit } from '@angular/core';
import { ListeCommandeService } from '../services/liste-commande.service';

@Component({
  selector: 'app-commnde',
  templateUrl: './commnde.component.html',
  styleUrls: ['./commnde.component.scss']
})
export class CommndeComponent implements OnInit {
  @Input()
   tabComm!: any;


   
  
  constructor() { }

  ngOnInit(): void {
    
  }



 

}
