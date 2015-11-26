var req = require('../http_server/request').request;
var douban = require('../web_site/douban').douban;
var env = require('C:\\Users\\sunhuanshan\\node_modules\\jsdom').env;
var query = require('C:\\Users\\sunhuanshan\\node_modules\\jquery');
var spliter_tool = function() {
    this.spliter = function(call_back) {
        var m_req = new req();
        var db = new douban();
        var db_option = db.get_book_index.option;
        var db_selector = db.get_book_index.key_sort;
        var db_select = function(html) {
            var jquery_html = '';
            env(html, function (errors, window) {
                var $ = query(window);
                if(db_selector) {
                    for(var key in db_selector) {
                        console.log(db_selector[key][0]['selector']);
                        jquery_html = jquery_html + $(db_selector[key][0]['selector']).text() + '\n';
                    }
                }
                call_back.call(this, jquery_html);
            });
        }
        m_req.request(db_option, db_select);
    }

}

exports.spliter_tool = spliter_tool;
