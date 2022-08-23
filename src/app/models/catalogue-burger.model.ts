import { IBurger } from "./burger.model";
import { IMenu } from "./menu.model";

export class ICatalogue{
    id!: number;
    menus!: IMenu[];
    burgers!: IBurger[];
    description!: string; 
    prix!: number;
    qantiteCommander!: number;
   
}