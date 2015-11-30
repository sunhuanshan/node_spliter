var mysql = require('mysql');
var m_db = function() {
    this.query = function (sql, call_back) {
        console.log('query begin ' + sql);
        if (sql && sql != '') {
            var _connection =  mysql.createConnection({
                    host: '192.168.66.31',
                    user: 'db_admin',
                    password: 'light2902',
                    port: '3306',
                    database: 'products_center_v1',
            });
            var result = [];
            var _connect = function ( query_call_back, end_call_back) {
                _connection.connect(function (err) {
                    if (err) {
                        console.log('[query] - :' + err);
                    } else {
                        console.log('[connection connect] success');
                        query_call_back.call(this, connection, sql);
                    }
                    end_call_back.call();
                });
            }

            var _query = function (sql, call_back) {
                _connection.query(sql, function (err, rows, fields) {
                    if (err) {
                        console.log('[query] - :' + err);
                    } else {
                        result = rows;
                        rows.forEach(function(value){
                            call_back.call(this, value['inner_order_id']);
                        });
                    }
                });
            }

            var _end = function () {
                _connection.end(function (err) {
                    if (err) {
                        console.log('[connection end] - :' + err);
                    }
                    console.log('[connection end] succeed!');
                });
            }
            //_connect(_query(sql), _end);
            _query(sql, call_back);
        }
    }
}

exports.m_db = m_db;