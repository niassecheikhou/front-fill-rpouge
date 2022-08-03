import { IBurger } from "./burger.model";
import { IMenu } from "./menu.model";

export class ICatalogue{
    id!: number;
    menus!: IMenu[];
    burgers!: IBurger[];
    description!: string;
    imageUrl!: string;  
    prix!: number;
   
}