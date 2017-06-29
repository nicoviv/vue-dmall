const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(oreq, ores) {
    if (oreq) {
        if (oreq.url !== '/favicon.ico') {
            let queryObj = url.parse(oreq.url, true).query;
            let content = '',
                data = {},
                datas = {};
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
                console.log('STATUS: ' + res.statusCode);
                console.log('HEADERS: ' + JSON.stringify(res.headers));
                res.setEncoding('utf8');

                res.on('data', function(chunk) {
                    // 返回数据
                    ores.writeHead(200, {
                        "Content-Type": "application/json; charset = UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    // res.write(getData);
                    console.log(chunk)
                    ores.end(chunk);
                });

            });
            req.on('error', function(e) {
                console.log('problem with request: ' + e.message);
            });
            req.end();
        }
    }
}).listen(8080, '127.0.0.1');
