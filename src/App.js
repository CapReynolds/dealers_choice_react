import React, {Component} from 'react';
import axios from 'axios';
import SingleGame from './SingleGame';

class App extends Component{
    constructor(){
        super();
        this.state = {
            games: [],
            selectedGameId: ''
            //selectedGame: {},            
        };
        this.onGameIDChange = this.onGameIDChange.bind(this);
    }
    
    async componentDidMount(){ //method occurs when app starts
        const games = (await axios.get('api/games')).data;
        this.setState({games: games});
        window.addEventListener('hashchange', ()=>{
            this.setState({selectedGameId: window.location.hash.slice(1)});
        });
        this.setState({selectedGameId: window.location.hash.slice(1)});
        //console.log(this.state.selectedGameId);
    }

    async onGameIDChange(newID){
        var {games} = this.state;
        var newgames = (await axios.get('api/games')).data;
        var oldID = window.location.hash;
        
        window.location.hash = '';
        //var tmp = games;
        //tmp.splice(oldID, 1);
        //console.log(games);
        this.setState({
            selectedGameId: '',
            games: newgames
        })
    }

    render(){
        const {games, selectedGameId} = this.state;
        const {onGameIDChange} = this;
        return (
            <div id="game-container">
            <div id= "game-list"> 
            {
                games.map(game =>{
                    return (
                        <div id = "game-item" key={game.id}>
                            <div id="rank">{game.id}</div>           
                            <div className="game-info">
                                <div id= "title"><a href={`#${game.id}`}>{game.title}</a></div>
                                <div id= "details"><small><red is='custom'>Publisher: </red>{game.publisher.name} | <red is='custom'>Developer: </red>{game.developer.name} | <red is='custom'>Released: </red>{game.releaseDate}</small></div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <div id="game-info">
                {
                    !!selectedGameId && <SingleGame selectedGameId = {selectedGameId} onGameIDChange ={onGameIDChange} gamesArr={games}/>
                }
          </div>
          </div>
        );
    }
}

export default App;