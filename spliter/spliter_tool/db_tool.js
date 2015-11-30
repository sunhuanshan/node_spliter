var m_db = require("../db/mysql").m_db;
var db_tool = function() {
    this.get_order_ids = function(option) {
        console.log()
        var _db = new m_db();
        var call_back = function(value) {
            option.url = option.url + value
            console.log('url is ' + option.url);
        }

        var sql = 'select inner_order_id from v3_inner_procurement_order' +
                ' where state = 4 and ' +
                ' account_id = 1 and' +
                ' inner_order_type = 0' +
                ' order by inner_procurement_order_id';
        _db.query(sql, call_back);
    }
}

//var _tool = new db_tool();
//_tool.get_order_ids(call_back);

exports.db_tool = db_tool;