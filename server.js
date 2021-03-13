const {syncAndSeed, findAllGames, findGame, models:{Developer, Publisher, Game}, db} = require('./db');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({
    extended: true
  }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/dist', express.static(path.join(__dirname, 'dist'))); 
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/games', async(req, res, next)=>{
    try{
        const allGames = await findAllGames();
        res.send(allGames);
    }
    catch(ex)
    {
        next(ex);
    }
});

app.get('/api/games/:id', async(req, res, next)=>{
    try{
        const game = await findGame(req.params.id);
        res.send(game);
    }
    catch(ex)
    {
        next(ex);
    }
});

app.delete('/api/games/:id', async(req,res, next)=>{
    try{
        const game = await Game.findByPk(req.params.id);
        var num = await game.destroy();
        res.send(num);
    }
    catch(ex)
    {
        next(ex);
    }
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));

