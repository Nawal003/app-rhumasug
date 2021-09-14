import { UserI } from './user-i';
export interface CommandeI {
    id?:number |string,
    date: Date,
    date_paiement: Date,
    client: UserI,
    panier: []
}
