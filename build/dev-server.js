require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
const http = require('http')
const url = require('url')
const querystring = require('querystring')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)


http.createServer(function(oreq, ores) {
    if (oreq) {
        if (oreq.url !== '/favicon.ico') {
            let queryObj = url.parse(oreq.url, true).query;
            let content = '',
                data = {},
                datas = "";
            for (item in queryObj) {
                if (item !== 'hostname') {
                    if (item !== 'path') {
                        data[item] = queryObj[item];
                    }
                }
            }
            content = querystring.stringify(data);

            let options = {
                hostname: queryObj.hostname,
                port: '80',
                path: queryObj.path + content,
                method: 'GET'
            };

            let req = http.request(options, function(res) {
                // console.log('STATUS: ' + res.statusCode);
                // console.log('HEADERS: ' + JSON.stringify(res.headers));
                res.setEncoding('utf8');

                res.on('data', function(chunk) {
                    // 返回数据
                    datas += chunk;
                });

                res.on('end', function() {
                    ores.writeHead(200, {
                        "Content-Type": "application/json; charset = UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    ores.end(datas);
                })

            });
                         
            req.on('error', function(e) {
                console.log('problem with request: ' + e.message);
            });

            req.end();

        }
    }
}).listen(8080,"127.0.0.1");


module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
