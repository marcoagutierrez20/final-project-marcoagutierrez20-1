'use strict';

const myslq = require('mysql');

require('dotenv').config()

class SqlService {
    constructor() {
        this.connection = myslq.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'it339'
        })
        this.creatPokemonTable();
    }

    creatPokemonTable() {
        this.connection.query(`CREATE TABLE IF NOT EXISTS pokemon (
            id INT NOT NULL AUTO_INCREMENT,
            pokemonId INT NOT NUll UNIQUE,
            name VARCHAR(100) NOT NULL,
            weight int NOT NULL,
            height int NOT NULL,
            sprite VARCHAR(250) NOT NULL,
            PRIMARY KEY (id)
        )`, (error, results, field) => {
            //console.log(error, results, field)
        });
    }

    addPokemon(pokemon, callback) {
        this.connection.query(`INSERT INTO pokemon SET ?`, pokemon, callback);
    }

    getPokemons(callback) {
        this.connection.query(`SELECT * FROM pokemon`, callback);
    }

    getPokemon(name, callback) {
        this.connection.query(`SELECT * FROM pokemon WHERE name = ?`, [name], callback);
    }
}

module.exports = new SqlService();