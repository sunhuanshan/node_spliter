var http = require('http');
var tool = require('../spliter_tool/tool').spliter_tool;
exports.start = function(port) {
    http.createServer(function(request, response){
        response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        var sp_callback = function(html) {
            console.log('sp_callback : ' + html);
            if(html && html != '') {
                response.write(html);
            }
            response.end();
        }
        var m_tool = new tool();
        m_tool.spliter(sp_callback);
    }).listen(port);
}