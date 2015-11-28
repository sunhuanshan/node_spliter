var http_tool = require('../spliter_tool/http_tool').spliter_tool;
var douban = require('../web_site/douban').douban;
var index = function(pramas, sp_callback) {
    var html = '<html><head><title>index</title></head><body><h2>爬虫首页</h2></body></html>';
    sp_callback.call(this, html);
}

var test = function() {
    console.log('test reques');
}

var douban_book = function(params, sp_callback) {
    var m_db = new douban();
    var m_tool = new http_tool();
    m_tool.spliter(m_db.book_index, sp_callback);
}

var url_map = {
    '/' : index,
    '/index' : index,
    '/test' : test,
    '/douban/book' : douban_book,

}

exports.url_map = url_map;