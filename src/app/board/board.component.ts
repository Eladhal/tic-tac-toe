import {Component, OnInit} from '@angular/core';
import {GameService} from '../Services/game.service';
import {GameSquare} from '../Classes/GameSquare';
import {MatDialog} from '@angular/material';
import {TurnPopupComponent} from '../turn-popup/turn-popup.component';
import {Player} from '../Classes/Player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  gameSquares: GameSquare[];
  presentStartAgain: boolean;

  constructor(private gameService: GameService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.gameSquares = this.gameService.gameSqures;
  }

  getGameSqure(row: number, col: number): GameSquare {
    return this.gameSquares.find(gs => gs.column === col && gs.row === row);
  }

  squreClicked() {
    if (this.gameService.checkForWinning()) {
      const currentPlayer: Player = this.getCurrentPlayer();
      const dialogRef = this.dialog.open(TurnPopupComponent,
        {
          disableClose: true, autoFocus: true,
          data: {name: currentPlayer.name, title: 'Congratulations, You Won!'}
        });

      dialogRef.afterClosed().subscribe(() => {
        this.presentStartAgain = true;
        currentPlayer.score++;
        this.gameService.disabledBoard();
      });
    }
    else if (this.gameService.checkForTie()) {
      const dialogRef = this.dialog.open(TurnPopupComponent,
        {
          disableClose: true, autoFocus: true,
          data: {name: '', title: 'It is a tie!'}
        });

      dialogRef.afterClosed().subscribe(() => {
        this.presentStartAgain = true;
      });
    }
    else {
      this.gameService.turnNum++;
    }
  }

  startAgain() {
    this.gameService.InitGame();
    this.presentStartAgain = false;
  }

  getCurrentPlayer(): Player {
    return this.gameService.turnNum % 2 === 0 ? this.gameService.player1 : this.gameService.player2;
  }

}
