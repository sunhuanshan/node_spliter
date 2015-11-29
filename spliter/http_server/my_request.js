var request = require('request');
var iconv = require('iconv-lite');
var my_request = function(){
    this.do_request = function(param, fun_call_back) {
        var encode = '';
        if(param.encode && param.encode != '') {
            encode = param.encode;
        } else {
            encode = 'utf8';
        }
        var req = request(param.options, function(error, response, body){
            var html = '';
            if (!error && response.statusCode == 200){
                html =iconv.decode(body, 'GBK');
            }
            if(html != '') {
                fun_call_back.call(this, html);
            }
        });
    }
}
exports.my_request = my_request;