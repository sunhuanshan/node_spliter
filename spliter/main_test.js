var test_main = function() {
    console.log('<---------------test now------------->');
    db_test();
    console.log('<---------------test end------------->');
}

var db_test = function() {
    console.log('test now');
    var db = require('./db/mysql').m_db;
    var sql = "select * from v3_user where name='sunhuanshan'";
    var _db = new db();
    _db.query(sql);
}

test_main();