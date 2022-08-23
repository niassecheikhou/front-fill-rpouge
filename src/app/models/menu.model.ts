import { IBurger } from "./burger.model";

export interface ITaille{
    id: number,
    taille: string,
    boissons:IBoisson[]
}
export interface IFritte{
    id: number,
     image: string;
     nomProduit: string;
     description: string,
     prix: number
    
}


export interface IBoisson{
    id: number;
    prix: number; 
    image: string;
    nomProduit: string;
    description: string;
}
export interface IMenu{
    id: number;
    prix: number; 
    image: string;
    nomProduit: string;
    menuBurgers:IBurger[];
    tailles: ITaille[ ];
    frittes:IFritte [ ];
    qantiteCommander:number;
    description: string;
    telephone:number
}