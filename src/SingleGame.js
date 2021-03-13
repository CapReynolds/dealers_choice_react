import React, {Component} from 'react';
import axios from 'axios';
import DisplayControls from './DisplayControls';

class SingleGame extends Component{
    constructor(){
        super()
        this.state = {
            game: {},
            developer: '',
            publisher: ''
        };
        this.removeGame = this.removeGame.bind(this);
    }
    async componentDidUpdate(prevProps){
        if(prevProps.selectedGameId != this.props.selectedGameId){
            const game = (await axios.get(`/api/games/${this.props.selectedGameId}`)).data;
            this.setState({
                game: game[0],
                developer: game[0].developer.name,
                publisher: game[0].publisher.name,
            });
        }
    }
    async componentDidMount(){
        const game = (await axios.get(`/api/games/${this.props.selectedGameId}`)).data;
        this.setState({
            game: game[0],
            developer: game[0].developer.name,
            publisher: game[0].publisher.name,
        });
    }

    async removeGame(id){
        var newID = id+ 1;
        const num = (await axios.delete(`/api/games/${id}`)).data;
        this.props.onGameIDChange(newID);
        this.setState({
            game: {},
            developer: '',
            publisher: '',
        })
    }

    render()
    {
        const {game, publisher, developer} = this.state;
        const{removeGame} = this;
        console.log(game);
       if(game.gameArt === undefined)
            return (<div></div>)
        else {
        return(
           <div>
               {
                   <div id= "game-content"> 
                   <img src={`/assets/${game.gameArt}`}/>   
                   <div className="game-item2">
                       <div id="rank">{game.id}</div>   
                       <div id="content"><p>{game.content}</p></div>
                       <div id= "details2"><small><red is = 'custom'>Publisher: </red>{publisher} | <red is = 'custom'>Developer: </red>{developer} | <red is = 'custom'>Released: </red>{game.releaseDate}</small></div>
                   </div>  
               </div>
               }
               <div>
                    <DisplayControls game ={this.state.game} removeGame={removeGame} gamesArr ={this.props.gamesArr}/>
               </div>
           </div>
        ); 
            }
    }
}

export default SingleGame;
