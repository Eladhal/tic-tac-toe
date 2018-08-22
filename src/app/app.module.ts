import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PopupComponent} from './popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TurnPopupComponent} from './turn-popup/turn-popup.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavBarComponent,
    PopupComponent,
    TurnPopupComponent,
    CellComponent
  ],
  entryComponents: [PopupComponent, TurnPopupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
