const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

//if we're developing, use webpack middleware for module hot reloading
if (process.env.NODE_ENV !== 'production') {
    console.log('==> 🌎 using webpack');

    // load and configure webpack
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('./webpack/dev.config');

    // setup middleware
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.set('port', port);
app.use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static(path.resolve(__dirname, '../client/build')))
    .use('/', routes);

// Start her up, boys
app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});