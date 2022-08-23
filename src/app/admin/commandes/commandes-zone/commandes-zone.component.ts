import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeCommandeService } from 'src/app/services/liste-commande.service';

@Component({
  selector: 'app-commandes-zone',
  templateUrl: './commandes-zone.component.html',
  styleUrls: ['./commandes-zone.component.scss']
})
export class CommandesZoneComponent implements OnInit {

  zone:any
  id:number= +this.route.snapshot.params['id'];
  constructor(private zoneService:ListeCommandeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.zoneService.getOneZone(this.id).subscribe((oneZone)=>{
      this.zone = oneZone;
      // console.log(this.zone );
    })
  }

}
