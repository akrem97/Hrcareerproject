import { Admin } from './admin';
import { Category } from './category';

export class Actualite {
    _id: string;
    titre: string;
    contenu: string;
    image: string;
    nbvisiteurs: number;
    dateCreation: Date;
    creePar: string;
    modifiePar: string;
    admin: Admin;
    category: Category;
}
