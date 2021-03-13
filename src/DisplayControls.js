import React from 'react';

const DisplayControls = (props)=>{
    var id = props.game.id;
    var removeGame = props.removeGame;
    console.log(props.game.id);
    var left = id +1; 
    var right = id -1;;
    
    if(right === 0)
    {
        return(
        <div id = "controls">
             <div id = "box">
                <div id = "arrow"><a href = {`#${left}`}> LEFT </a></div>
                <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
            </div>
            <button onClick={()=>removeGame(id)} >Remove</button>
        </div>);
    }
    else if(left === 11)
    {
        return(
            <div id = "controls">
                 <div id = "box">
                    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
                    <div id = "arrow"><a href = {`#${right}`}> RIGHT </a></div>
                </div>
                <button onClick={()=>removeGame(id)} >Remove</button>
            </div>);
    }
    else{
        return(
            <div id = "controls">
                 <div id = "box">
                    <div id = "arrow"><a href = {`#${left}`}> LEFT </a></div>
                    <div><img src="/assets/segaSwirl3.jpeg"width="30" height="30" /></div>
                    <div id = "arrow"><a href = {`#${right}`}> RIGHT </a></div>
                </div>
                <button onClick={()=>removeGame(id)} >Remove</button>
            </div>);
    }
    
}

export default DisplayControls;
