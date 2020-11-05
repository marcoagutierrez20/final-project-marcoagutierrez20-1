const myslq = require('mysql');

class SqlService {
    constructor() {
        console.log('Constructor!', process.env);
        this.connection = myslq.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'it339'
        })

        this.creatTestTable();
    }

    creatTestTable() {
        this.connection.query(`CREATE TABLE IF NOT EXISTS tests (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            description VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        )`, (error, results, field) => {
            console.log(error, results, field)
        });
    }
}

module.exports = new SqlService();