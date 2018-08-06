import {Game } from './game.model'


export class GameListService {
    
    objGames : Game[] = [
        new Game("Labyrinth", 
            'assets/img/games/Labyrinth.jpg',
            'https://drive.google.com/file/d/0b4wxv75i0nwdawextzlgaxd4bvk/view?usp=sharing',
            0,
            'This is the first game I finished. Not much too it and a few problems still, but I will try to update it as I go along.',
            'It is based on the old wooden box game where you rotate the board to let gravity move the ball around. The gold is to collect as many coins as you can while not falling in the wholes. When you reach the finish or fall in a whole, the game ends.')
    ] 


    public getGameList( ) : Game[]{


        return this.objGames.slice();

    }

}