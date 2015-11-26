var douban = function() {
    this.get_book_index = {
        option: {
            hostname: 'book.douban.com',
            port: 80,
            path:'/',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        },
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