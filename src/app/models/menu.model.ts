import { IBurger } from "./burger.model";

export interface ITaille{

}
export interface IFritte{
    
}
export interface IMenu{
    id: number;
    description: string;
    prix: number; 
    image: string;
    nomProduit: string;
    menuBurgers:IBurger [];
    menuTailleBoisson: ITaille[ ];
    menuFrittes:IFritte [ ];
}