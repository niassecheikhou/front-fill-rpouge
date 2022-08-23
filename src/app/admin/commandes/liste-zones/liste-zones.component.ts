import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeCommandeService } from 'src/app/services/liste-commande.service';

@Component({
  selector: 'app-liste-zones',
  templateUrl: './liste-zones.component.html',
  styleUrls: ['./liste-zones.component.scss']
})
export class ListeZonesComponent implements OnInit {
zones:any[]=[]
  constructor(private zoneService:ListeCommandeService,private route:Router) { }

  ngOnInit(): void {
    this.zoneService.getAllZone().subscribe((data)=>{
      this.zones=data;
    })
  }

  cmandeZone(zon:any){
    this.route.navigateByUrl('admin/commandes/zone/'+zon.id)
  }

}
