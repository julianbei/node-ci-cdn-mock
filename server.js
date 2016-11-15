var koa = require('koa');
var serve = require('koa-static');

var app = koa();
var port = process.env.PORT || 3000;

app.use(serve('app/dist'));
app.listen(port);

console.log('CDN Mock listening on port:', port);
