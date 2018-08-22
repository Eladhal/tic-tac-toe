import {Injectable} from '@angular/core';
import {Player} from '../Classes/Player';
import {GameSquare} from '../Classes/GameSquare';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameSqures: GameSquare[];
  player1: Player;
  player2: Player;
  turnNum: number;

  constructor() {
    this.gameSqures = [];
    this.player1 = new Player();
    this.player2 = new Player();
  }

  restartGame() {

    this.player1.name = 'Player1';
    this.player1.score = 0;
    this.player1.shape = '';

    this.player2.name = 'Player2';
    this.player2.score = 0;
    this.player2.shape = '';

    this.InitGame();
  }

  InitGame() {
    this.turnNum = 0;
    this.gameSqures.length = 0;
    for (let r = 0; r <= 2; r++) {
      for (let c = 0; c <= 2; c++) {
        this.gameSqures.push(new GameSquare(r, c, '', false));
      }
    }
  }

  checkForWinning(): boolean {
    const currentShape = this.turnNum % 2 === 0 ? this.player1.shape : this.player2.shape;

    if (this.win(this.gameSqures.filter(squre => squre.column === 0), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.column === 1), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.column === 2), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.row === 0), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.row === 1), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.row === 2), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.row === squre.column), currentShape)) {
      return true;
    }
    if (this.win(this.gameSqures.filter(squre => squre.row + squre.column === 2), currentShape)) {
      return true;
    }
  }

  checkForTie(): boolean {
    return this.gameSqures.find(square => square.shape === '') === undefined; // If not found one square that is empty, it's a tie
  }

  win(gameSqures: GameSquare[], currentShape: string): boolean {
    return (gameSqures.find(squre => squre.shape !== currentShape) === undefined); // If i found one square that not match the shape it is not a wining
  }

  disabledBoard() {
    this.gameSqures.forEach(square => square.disable = true);
  }
}
