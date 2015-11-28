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
request('https://www.taobao.com/market/nanzhuang/index.php?spm=a21bo.7724922.8374-1.2.PF5rWt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // 打印google首页
    }
})