import { Podcast } from './podcast';

export class Episode {
  _id: string;
  nom: string;
  invites: string;
  sequence: string;
  date_creation: Date ;
  podcast: Podcast;
}
