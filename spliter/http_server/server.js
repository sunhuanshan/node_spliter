var http = require('http');
var url = require('url');
var view = require('./view')
exports.start = function(port) {
    http.createServer(function(request, response){
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        //response.writeHead(200, {'Content-Type': 'text/html;charset=gbk'});
        var sp_callback = function(html) {
            if(html && html != '') {
                console.log(html);
                response.write(html);
            }
            response.end();
        }
        if(request.method == 'GET') {
            var url_info = url.parse(request.url, true);
        if(view.url_map[url_info.pathname]) {
            var params = url_info.query;
            view.url_map[url_info.pathname].call(this, params, sp_callback);
        } else {
            console.log('url not exists in view');
        }

    }
    }).listen(port);
}