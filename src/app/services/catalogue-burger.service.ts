import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CatalogueBurger } from '../models/catalogue-burger.model';



@Injectable({
    providedIn: 'root'
})

export class CatalogueBurgerService{

    catalogueburgers: CatalogueBurger[] = [
        {
         id:1,
         titles:'Cheeseburger',
         description: "Du fromage fondu et une viande de bœuf grillée à la flamme. Légendaire.",
         imageUrl: 'https://burgerkingfrance.twic.pics/img/products/f/37/f378eae5-61a3-459f-b40f-4057b4f88e96_?twic=v1/contain=600x600',
         prix: 587,
         
        },
        {
         id:2,
         titles:'Steakhouse',
         description: "Ses atouts ? Ses oignons croustillants, son bacon et sa délicieuse sauce barbecue, en plus d’une savoureuse viande de boeuf grillée à la flamme et d’une tranche de fromage fondu.",
         imageUrl: 'https://burgerkingfrance.twic.pics/img/products/e/77/e7752470-c368-44a6-88e2-b58f16f75d14_?twic=v1/contain=600x600',
         prix: 587,
        },
        {
          id:3,
          titles:'BIG KING',
         description: "Incontournable. Fondez pour sa sauce au goût unique, ses deux viandes de bœuf grillées à la flamme et son fromage fondant … Un chef d’oeuvre !",
         imageUrl: 'https://burgerkingfrance.twic.pics/img/products/d/3a/d3afad28-0bbf-462f-899a-ef4fe22d1380_?twic=v1/contain=600x600',
        prix: 587,
        },
        {
            id:4,
            titles:'Cheeseburger',
            description: "Du fromage fondu et une viande de bœuf grillée à la flamme. Légendaire.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/f/37/f378eae5-61a3-459f-b40f-4057b4f88e96_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:5,
             titles:'Steakhouse',
            description: "Ses atouts ? Ses oignons croustillants, son bacon et sa délicieuse sauce barbecue, en plus d’une savoureuse viande de boeuf grillée à la flamme et d’une tranche de fromage fondu.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/e/77/e7752470-c368-44a6-88e2-b58f16f75d14_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:6,
             titles:'BIG KING',
            description: "Incontournable. Fondez pour sa sauce au goût unique, ses deux viandes de bœuf grillées à la flamme et son fromage fondant … Un chef d’oeuvre !",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/d/3a/d3afad28-0bbf-462f-899a-ef4fe22d1380_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:7,
            titles:'Cheeseburger',
            description: "Du fromage fondu et une viande de bœuf grillée à la flamme. Légendaire.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/f/37/f378eae5-61a3-459f-b40f-4057b4f88e96_?twic=v1/contain=600x600',
            prix: 587,
          },
           {
            id:8,
             titles:'Steakhouse',
            description: "Ses atouts ? Ses oignons croustillants, son bacon et sa délicieuse sauce barbecue, en plus d’une savoureuse viande de boeuf grillée à la flamme et d’une tranche de fromage fondu.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/e/77/e7752470-c368-44a6-88e2-b58f16f75d14_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:9,
             titles:'BIG KING',
            description: "Incontournable. Fondez pour sa sauce au goût unique, ses deux viandes de bœuf grillées à la flamme et son fromage fondant … Un chef d’oeuvre !",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/d/3a/d3afad28-0bbf-462f-899a-ef4fe22d1380_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:10,
            titles:'Cheeseburger',
            description: "Du fromage fondu et une viande de bœuf grillée à la flamme. Légendaire.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/f/37/f378eae5-61a3-459f-b40f-4057b4f88e96_?twic=v1/contain=600x600',
            prix: 587,
          },
           {
            id:11,
             titles:'Steakhouse',
            description: "Ses atouts ? Ses oignons croustillants, son bacon et sa délicieuse sauce barbecue, en plus d’une savoureuse viande de boeuf grillée à la flamme et d’une tranche de fromage fondu.",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/e/77/e7752470-c368-44a6-88e2-b58f16f75d14_?twic=v1/contain=600x600',
            prix: 587,
           },
           {
            id:12,
             titles:'BIG KING',
            description: "Incontournable. Fondez pour sa sauce au goût unique, ses deux viandes de bœuf grillées à la flamme et son fromage fondant … Un chef d’oeuvre !",
            imageUrl: 'https://burgerkingfrance.twic.pics/img/products/d/3a/d3afad28-0bbf-462f-899a-ef4fe22d1380_?twic=v1/contain=600x600',
            prix: 587,
           },
            
      ];

     
      getCatalogueBurger():Observable<CatalogueBurger>{
        return from (this.catalogueburgers)
      }
}



  