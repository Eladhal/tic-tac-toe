import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GameService} from '../Services/game.service';
import {GameSquare} from '../Classes/GameSquare';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() gameSqure: GameSquare;
  @Output() squreClicked = new EventEmitter();

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }

  cellClick() {
    if (this.gameSqure.disable === true) {
      return;
    }
    this.gameSqure.disable = true;
    if (this.gameService.turnNum % 2 === 0) {
      this.gameSqure.shape = this.gameService.player1.shape;
    }
    else {
      this.gameSqure.shape = this.gameService.player2.shape;
    }
    this.squreClicked.emit();
  }
}
