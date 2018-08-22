export class GameSquare {
  row: number;
  column: number;
  shape: string;
  disable: boolean;

  constructor(row: number, column: number, shape: string,disable: boolean) {
    this.row = row;
    this.column = column;
    this.shape = shape;
    this.disable = disable;
  }

}
