var douban = function() {
    this.book_index = {
        option: {
            hostname: 'book.douban.com',
            port: 80,
            path:'/',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        },
        url: 'book.douban.com',
        key_sort:{
            'title' : [
                {
                    'selector' : '.popular-books h2 span:not(.link-more)',
                    'method': 'text'
                }
            ],
            'content' :[
                {
                    'selector' : '.popular-books .bd li .title',
                    'method':'text'
                },

            ]
        }
    }
}

exports.douban = douban;