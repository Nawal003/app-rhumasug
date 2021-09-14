import { CommandeI } from './commande-i';

export interface UserI {
    id?:number | string,
    roles:string,
    email:string,
    password:string,
    nom:string,
    prenom:string,
    dateDeNaissance:Date,
    telephone:string,
    adresse:string,
    commande:CommandeI[]

}
