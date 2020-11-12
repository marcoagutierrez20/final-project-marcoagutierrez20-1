'use strict';

const sqlService = require('../services/SqlService');

module.exports = app => {
    app.post('/api/pokemon', (req, resp) => {
        sqlService.addPokemon(req.body, (err, results) => {
            if(err) {
                return resp.status(500).json(err);
            }
            resp.json(results);
        })
    })

    app.get('/api/pokemons', (req, resp) => {
        sqlService.getPokemons((err, results) => {
          if (err) {
            return resp.status(500).json(err);
          }
    
          resp.json(results);
        });
    });

    app.get('/api/pokemon/:name', (req, resp) => {
        sqlService.getPokemon(req.params.name, (err, results) => {
          if (err) {
            return resp.status(500).json(err);
          }
    
        resp.json(results);
        });
    });
}