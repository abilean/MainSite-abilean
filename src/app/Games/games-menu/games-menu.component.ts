import { Component, OnInit } from '@angular/core';
import { GameListService } from '../GameList.Service';

import { Game } from '../game.model';
@Component({
  selector: 'app-games-menu',
  templateUrl: './games-menu.component.html',
  styleUrls: ['./games-menu.component.css'],
  providers: [GameListService]
})
export class GamesMenuComponent implements OnInit {

  mobjGames : Game[];

  constructor(private gameListService : GameListService) { }

  ngOnInit() {
    this.mobjGames = this.gameListService.getGameList()
  }

}
