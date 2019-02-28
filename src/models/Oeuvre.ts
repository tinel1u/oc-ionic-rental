export class Oeuvre {
  name: string;
  genre: string;
  isAvailable: boolean;

  constructor(name: string) {
    this.name = name;
    this.isAvailable = false;
  }
}
