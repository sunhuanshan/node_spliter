var http_tool = require('../spliter_tool/http_tool').spliter_tool;
var douban = require('../web_site/douban').douban;
var taobao = require('../web_site/taobao').taobao;
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
var m_tb = new taobao();
var m_tool = new http_tool();

var taobao_order = function(params, sp_callback) {
    console.log(' get taobao order now');
    m_tool.spliter(m_tb.orders, sp_callback);
}

var tabao_order_trade_detail = function(params, sp_callback) {
    m_tool.spliter(m_tb.order_trade_detail, sp_callback);
}
var taobao_index = function(params, sp_callback) {
    m_tool.spliter(m_tb.index, sp_callback);
}
var url_map = {
    '/' : index,
    '/index' : index,
    '/test' : test,
    '/douban/book' : douban_book,
    '/taobao/order': taobao_order,
    '/taobao/index': taobao_index,
    '/taobao/trade_detail': tabao_order_trade_detail,
}

exports.url_map = url_map;