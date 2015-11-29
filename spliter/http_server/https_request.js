var https = require('https');
var iconv = require('iconv-lite');
var req = function() {
    console.log('https request now');
    this.https_request = function(options, fun_back) {
        var m_req = https.request(options, function(res) {
            console.log('SATUS:' + res.statusCode);
            console.log('HEADERS:' + JSON.stringify(res.headers));
            res.setEncoding(null);
            var html = '';
            res.on('data', function(chunk) {
                html += chunk;
            })
            res.on('end', function() {
                if(html == '') {
                    console.log('no data in response');
                } else {
                    console.log(html);
                    //html = iconv.decode(html,'GBK');
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
}

exports.https_request = req;