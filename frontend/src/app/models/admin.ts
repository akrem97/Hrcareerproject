import { Actualite } from './actualite';


export class Admin {
    _id: string;
    nom: string;
    prenom: string ;
    motdepasse: string;
    email: string;
    actualites: Actualite[];
}
