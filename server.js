var express = require('express');
var app = express();
var ECT = require('ect');


var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });
var routes = require('./routes');
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

    app.use('/', routes);

app.listen(3000, function(){
console.log('Listening on port 3000');
})