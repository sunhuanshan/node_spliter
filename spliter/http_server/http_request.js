var http = require('http');
var request = require('request');
var req = function() {
    console.log('request now');
     this.http_request = function(options, fun_back) {
         var m_req = http.request(options, function(res) {
             console.log('SATUS:' + res.statusCode);
             console.log('HEADERS:' + JSON.stringify(res.headers));
             //res.setEncoding('utf8');
             var html = '';
             res.on('data', function(chunk) {
                 html += chunk;
             })
             res.on('end', function() {
                 if(html == '') {
                     console.log('no data in response');
                 } else {
                     fun_back.call(this, html);
                 }
             })
         });
         m_req.on('error', function(e) {
             console.log('problem with request: ' + e.message);
         });

         // write data to request body
         m_req.end();

     };
    this.do_get = function(option, fun_back) {
        request.get(options.url).on('response', function(error, response, body) {
            if(!error && response.statusCode == 200) {
                fun_back.call(this, body);
            }
        } );
    };
}

exports.http_request = req;
