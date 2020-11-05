const express = require('express'),
    pkg = require('./package.json'),    
    axios = require('axios'),
    sqlService = require('./services/SqlService');

const config = {
    port: 8081,
    sql: {
        host: 'localhost',
        port: 3306,
    }
};

const app = express();

app.get('/api/hello/:name', (req, res) => {
    //console.log(req);
    res.json({
        "name": req.params.name,
        "greeting":  "Hello there " +  req.params.name[0].toUpperCase() 
                        + req.params.name.substring(1) + " it's nice to meet you!"
    })
});

app.get('/api/version', (req, resp) => {
    resp.json({version: pkg.version});
})



app.listen(config.port, () => console.log(`Server started on ${config.port}`));