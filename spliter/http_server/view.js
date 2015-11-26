var index = function() {
    console.log('index request');
}

var test = function() {
    console.log('test reques');
}

var url_map = {
    '/' : index,
    '/index' : index,
    'test' : test

}

exports.url_map = url_map;