var req = require('../http_server/http_request').http_request;
var env = require('jsdom').env;
var query = require('jquery');
var spliter_tool = function() {
    this.spliter = function(web_site, call_back) {
        var m_req = new req();
        var db_option = web_site.option;
        var db_selector = web_site.key_sort;
        var db_select = function(html) {
            var jquery_html = '';
            env(html, function (errors, window) {
                var $ = query(window);
                if(db_selector) {
                    for(var key in db_selector) {
                        console.log(db_selector[key][0]['selector']);
                        $(db_selector[key][0]['selector']).each(function(){
                            jquery_html = jquery_html + $(this).text() + '<br/>';
                        });
                    }
                }
                call_back.call(this, jquery_html);
            });
        }
        m_req.http_request(db_option, db_select);
    }

}

exports.spliter_tool = spliter_tool;
