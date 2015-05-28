var webpack = require('webpack');
var app = require('koa')();
app.use(require('koa-webpack-dev-test-server').middleware());
var port = 8000;
app.listen(port);
console.log('server start at ' + port);