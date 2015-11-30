//var req = require('../http_server/http_request').http_request;
//var https_req = require('../http_server/https_request').https_request;
var my_request = require('../http_server/my_request').my_request;
var env = require('jsdom').env;
var query = require('jquery');
var my_db_tool = require('./db_tool').db_tool;
var spliter_tool = function() {
    this.spliter = function(web_site, call_back) {
        var m_req = new my_request();
        //var m_req = new req();
        //var m_req = new https_req();
        var db_tool = new my_db_tool();
        db_tool.get_order_ids(web_site.option);
        var params = {};
        params['options'] = web_site.option;
        params['encode'] = web_site.encode;
        var selector = web_site.key_sort;
        var select = function(html) {
            var jquery_html = '';
            env(html, function (errors, window) {
                var $ = query(window);
                if(selector) {
                    for(var key in selector) {
                        for (var i = 0 ; i<  selector[key].length ; i++) {
                            var single = selector[key][i];
                            $(single['selector']).each(function () {
                                var _j_html = single['title'] + '--';
                                if (single['method']) {
                                    console.log(single['method']);
                                    if (single['method'] == 'attr') {
                                        _j_html += $(this).attr(single['param']);
                                    }
                                } else {
                                    _j_html += $(this).text();
                                }
                                _j_html += '<br/>';
                                jquery_html += _j_html;
                            });
                        }
                    }
                } else {
                    //var tmp_html = html.replace(/<\/?[^>]*>/g, '')
                    //                   .replace(/[\r\n]/g,'')
                    //    .replace(/\n[\s| | ]*\r/g, '');
                    ///(data-mail-no=")([a-zA-Z0-9-]{1,})(" data-company-name=")(.*)(")/
                    jquery_html = html;
                }

                call_back.call(this, jquery_html);
            });
        }
        //m_req.http_request(option, select);
        //m_req.https_request(option, select);
        m_req.do_request(params, select);
    }

}

exports.spliter_tool = spliter_tool;
