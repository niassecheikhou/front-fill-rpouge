export class ICommande{
    id!: number;
    prixTotal!: number;
    qantiteCommander!: number;
    telephone!: number;
    etat=true
    dateCommande!:Date;
   
}

export class ILivreur{
    
    etat!: boolean;
    telephoneLivraison!:number;
    commandes!: [ ];
    zone!: string;
      
}