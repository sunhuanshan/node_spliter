var header = require('./header')
var body = require('./body')
exports.notice = function(name){
    return {
        name:name,
        header : header.notice(),
        body:body.notice()
    }
}
