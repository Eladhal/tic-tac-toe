export class Player {
  name: string;
  score: number;
  shape: string;

  constructor(name?: string, score?: number, shape?: string) {
    this.name = name;
    this.score = score;
    this.shape = shape;
  }
}
