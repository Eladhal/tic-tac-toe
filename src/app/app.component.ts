import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PopupComponent} from './popup/popup.component';
import {GameService} from './Services/game.service';
import {Player} from './Classes/Player';
import {TurnPopupComponent} from './turn-popup/turn-popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog, private gameService: GameService) {
    this.startGame();
  }

  startGame() {
    this.gameService.restartGame();
    const shapes = ['X', 'O'];
    const dialogRef1 = this.dialog.open(PopupComponent,
      {disableClose: true, autoFocus: true, data: {name: 'Player1', shapes: shapes}});

    dialogRef1.afterClosed().subscribe(firstPlayer => {
      this.gameService.player1.name = firstPlayer.name;
      this.gameService.player1.shape = firstPlayer.shape;
      this.gameService.player1.score = firstPlayer.score;

      const player2Shape = this.getPlayer2Shape(firstPlayer);
      const indx = shapes.indexOf(player2Shape);
      const newShapes = shapes.splice(indx, 1);

      const dialogRef2 = this.dialog.open(PopupComponent,
        {disableClose: true, autoFocus: true, data: {name: 'Player2', shapes: newShapes}});

      dialogRef2.afterClosed().subscribe(secondPlayer => {
        this.gameService.player2.name = secondPlayer.name;
        this.gameService.player2.shape = secondPlayer.shape;
        this.gameService.player2.score = secondPlayer.score;

        this.dialog.open(TurnPopupComponent,
          {
            disableClose: true, autoFocus: true,
            data: {name: this.gameService.player1.name, title: 'start playing!'}
          });
      });
    });
  }

  getPlayer2Shape(firstPlayer: Player): string {

    switch (firstPlayer.shape) {
      case 'X':
        return 'O';
      case 'O':
        return 'X';
    }
  }
}


