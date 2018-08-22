import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Player} from '../Classes/Player';
import {GameService} from '../Services/game.service';
import {GameSquare} from '../Classes/GameSquare';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  player1: Player;
  player2: Player;

  @Output() restartGm = new EventEmitter<GameSquare>();

  constructor(private gameService: GameService) {
    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;
  }

  ngOnInit() {
  }

  restartGame() {
    this.restartGm.emit();
  }

}
