//var env = require('C:\\Users\\sunhuanshan\\node_modules\\jsdom').env
//    , html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>'
//    ;
//
//// first argument can be html string, filename, or url
//env(html, function (errors, window) {
//    console.log(errors);
//
//    var $ = require('C:\\Users\\sunhuanshan\\node_modules\\jquery')(window)
//        ;
//
//    console.log($('.hello').text());
//});
var request = require('request');
//request('https://www.taobao.com/market/nanzhuang/index.php?spm=a21bo.7724922.8374-1.2.PF5rWt', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//        console.log(body) // 打印google首页
//    }
//})

var iconv = require('iconv-lite')

var options = {
    //url: 'http://book.douban.com',
    //url: 'https://buyertrade.taobao.com/trade/itemlist/list_bought_items.htm',
    url: 'https://trade.tmall.com/detail/orderDetail.htm?bizOrderId=1295119541062436',
    headers:{
        'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        //'accept-encoding':'gzip, deflate, sdch',
        'accept-language':'zh-CN,zh;q=0.8,en;q=0.6',
        'cookie':'swfstore=273570; thw=cn; cna=N2vXDhMwlVwCAQEMdb9ogoQe; _tb_token_=v2u69i3e0Bipcz; v=0; uc3=nk2=qEffhZnG&id2=UoLZXB%2FgrD5q&vt3=F8dAScAc2Tz9%2FH6qTtE%3D&lg2=UIHiLt3xD8xYTw%3D%3D; existShop=MTQ0ODc5MDUzOA%3D%3D; lgc=%5Cu5B59%5Cu7115%5Cu5C71; tracknick=%5Cu5B59%5Cu7115%5Cu5C71; sg=%E5%B1%B140; skt=07e26cce669fb6ec; _cc_=Vq8l%2BKCLiw%3D%3D; tg=0; _l_g_=Ug%3D%3D; mt=ci=1_1; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0%26__ll%3D-1%26_ato%3D0; ubn=p; ucn=center; whl=-1%260%260%261448799229764; l=AjIyan-VLDwOrdpxLHtYj-ycAnYU7DZd; cookie2=1c2f65e13e6eafc13cd906b8205e5152; cookie1=AHsuVyo%2BK%2BEanGRJgMpheCUyRru%2BHmVWXYV%2FIcAKdtA%3D; uc1=cookie14=UoWzUa28NKjZ9A%3D%3D&existShop=false&cookie16=V32FPkk%2FxXMk5UvIbNtImtMfJQ%3D%3D&cookie21=UIHiLt3xThN%2B&tag=7&cookie15=VFC%2FuZ9ayeYq2g%3D%3D&pas=0; unb=135023624; t=4114beb87b55d7bf8657983676f73879; _nk_=%5Cu5B59%5Cu7115%5Cu5C71; cookie17=UoLZXB%2FgrD5q; uc2=wuf=http%3A%2F%2Flocalhost%3A8080%2Ftaobao%2Forder; isg=844F3C39B141CCAC90AAFECBD8BE318B',
        'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
    },
    encoding:null
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200){
        console.log(body);
        var info =iconv.decode(body, 'gbk');
        console.log(info);
    }
}

request(options, callback);