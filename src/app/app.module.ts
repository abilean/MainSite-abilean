import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes , RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { MyCustomMaterialModule } from './myCustomMaterialModule';
import { GamesMenuComponent } from './games/games-menu/games-menu.component';
import { TutorialsMenuComponent } from './tutorials/tutorials-menu/tutorials-menu.component';
import { WebfunMenuComponent } from './webfun/webfun-menu/webfun-menu.component';
import { GameListService } from './Games/GameList.Service';
import { GameItemComponent } from './games/game-item/game-item.component';

const appRoutes : Routes = [
  {path : 'Games', component: GamesMenuComponent},
  {path : 'Tutorials', component : TutorialsMenuComponent},
  {path : 'Webfun', component : WebfunMenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GamesMenuComponent,
    TutorialsMenuComponent,
    WebfunMenuComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    RouterModule.forRoot (appRoutes, {enableTracing: true})
  ],
  providers: [GameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
