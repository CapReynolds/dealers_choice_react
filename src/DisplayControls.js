import React from 'react';

const DisplayControls = (props)=>{
    var gamesArr = props.gamesArr;
    var gameId = props.game.id;
    var removeGame = props.removeGame;
    var left = 41; 
    var right = 11;
    var pos = gamesArr.map(function(game) { return game.id; }).indexOf(gameId);
    var toleft = pos - 1; 
    var toright = pos + 1;

    if(gamesArr[toright] === undefined)
    {
        return(
        <div id = "controls">
             <div id = "box">
                <div id = "arrow"><a href = {`#${gamesArr[toleft].id}`}> LEFT </a></div>
                <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
            </div>
            <button onClick={()=>removeGame(gameId)} >Remove</button>
        </div>);
    }
    else if(gamesArr[toleft] === undefined)
    {
        return(
            <div id = "controls">
                 <div id = "box">
                    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
                    <div id = "arrow"><a href = {`#${gamesArr[toright].id}`}> RIGHT </a></div>
                </div>
                <button onClick={()=>removeGame(gameId)} >Remove</button>
            </div>);
    }
    else{
        return(
            <div id = "controls">
                 <div id = "box">
                    <div id = "arrow"><a href = {`#${gamesArr[toleft].id}`}> LEFT </a></div>
                    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
                    <div id = "arrow"><a href = {`#${gamesArr[toright].id}`}> RIGHT </a></div>
                </div>
                <button onClick={()=>removeGame(gameId)} >Remove</button>
            </div>);
    }
    
}

export default DisplayControls;
