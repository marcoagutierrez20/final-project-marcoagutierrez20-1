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

        this.creatTestTable();
    }

    creatTestTable() {
        this.connection.query(`CREATE TABLE IF NOT EXISTS test (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            description VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        )`, (error, results, field) => {
            //console.log(error, results, field)
        });
    }
}

module.exports = new SqlService();