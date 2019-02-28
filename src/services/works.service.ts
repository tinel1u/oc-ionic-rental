import { Oeuvre } from '../models/Oeuvre';

export class WorksService {
  booksList: Oeuvre[] = [
    {
      name: 'Le Seigneur des Anneaux',
      genre: 'Heroic-fantasy',
      isAvailable: true,
    },
    {
      name: 'L\'Etranger',
      genre: 'Roman',
      isAvailable: true,
    },
    {
      name: 'Ne le dis à personne',
      genre: 'Polar',
      isAvailable: false,
    }
  ];

  cdList: Oeuvre[] = [
    {
      name: 'Back to Black',
      genre: 'Soul',
      isAvailable: true,
    },
    {
      name: 'Random Access Memories',
      genre: 'Musiques électroniques',
      isAvailable: true,
    },
    {
      name: 'Imany',
      genre: 'Rap Français',
      isAvailable: false,
    }
  ];
}
