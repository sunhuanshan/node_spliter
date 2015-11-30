var taobao = function() {
    this.nanzhuang = {
        //使用原生方法
        option:{
            hostname: 'www.taobao.com',
            port: 443,
            path:'/market/nanzhuang/index.php',
            method: 'GET',
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }
    }

    this.orders = {
        //使用request方法
        option:{
            url: 'https://buyertrade.taobao.com/trade/itemlist/list_bought_items.htm',
            headers:{
                'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                //'accept-encoding':'gzip, deflate, sdch',//千万要注意，设置该项会导致乱码
                'accept-language':'zh-CN,zh;q=0.8,en;q=0.6',
                'cookie':'swfstore=273570; thw=cn; cna=N2vXDhMwlVwCAQEMdb9ogoQe; _tb_token_=v2u69i3e0Bipcz; v=0; uc3=nk2=qEffhZnG&id2=UoLZXB%2FgrD5q&vt3=F8dAScAc2Tz9%2FH6qTtE%3D&lg2=UIHiLt3xD8xYTw%3D%3D; existShop=MTQ0ODc5MDUzOA%3D%3D; lgc=%5Cu5B59%5Cu7115%5Cu5C71; tracknick=%5Cu5B59%5Cu7115%5Cu5C71; sg=%E5%B1%B140; skt=07e26cce669fb6ec; _cc_=Vq8l%2BKCLiw%3D%3D; tg=0; _l_g_=Ug%3D%3D; mt=ci=1_1; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0%26__ll%3D-1%26_ato%3D0; ubn=p; ucn=center; whl=-1%260%260%261448799229764; l=AjIyan-VLDwOrdpxLHtYj-ycAnYU7DZd; cookie2=1c2f65e13e6eafc13cd906b8205e5152; cookie1=AHsuVyo%2BK%2BEanGRJgMpheCUyRru%2BHmVWXYV%2FIcAKdtA%3D; uc1=cookie14=UoWzUa28NKjZ9A%3D%3D&existShop=false&cookie16=V32FPkk%2FxXMk5UvIbNtImtMfJQ%3D%3D&cookie21=UIHiLt3xThN%2B&tag=7&cookie15=VFC%2FuZ9ayeYq2g%3D%3D&pas=0; unb=135023624; t=4114beb87b55d7bf8657983676f73879; _nk_=%5Cu5B59%5Cu7115%5Cu5C71; cookie17=UoLZXB%2FgrD5q; uc2=wuf=http%3A%2F%2Flocalhost%3A8080%2Ftaobao%2Forder; isg=844F3C39B141CCAC90AAFECBD8BE318B',
                'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
            },
            encoding:null //若网页是GBK编码，需要返回二进制字节流
        },
        encode:'GBK'
    }

    this.order_trade_detail = {
        //使用request方法
        option:{
            url: 'https://trade.tmall.com/detail/orderDetail.htm?bizOrderId=',
            headers:{
                'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                //'accept-encoding':'gzip, deflate, sdch',//千万要注意，设置该项会导致乱码
                'accept-language':'zh-CN,zh;q=0.8,en;q=0.6',
                'cookie':'swfstore=71321; cna=N2vXDhMwlVwCAQEMdb9ogoQe; x=__ll%3D-1%26_ato%3D0; _tb_token_=6SLCjYKeXjrK5F6; ck1=; uc1=cookie14=UoWzUaP2zW8Ebg%3D%3D&existShop=false&cookie16=W5iHLLyFPlMGbLDwA%2BdvAGZqLg%3D%3D&cookie21=UtASsssme%2BBq&tag=5&cookie15=VT5L2FSpMGV7TQ%3D%3D&pas=0; uc3=nk2=2XCzVhAjyVE%2B&id2=UUwVYuBz8JZ%2B8g%3D%3D&vt3=F8dAScAbWFA9uD2hn2Q%3D&lg2=Vq8l%2BKCLz3%2F65A%3D%3D; lgc=%5Cu76D2%5Cu5B50tab04; tracknick=%5Cu76D2%5Cu5B50tab04; cookie2=1cca0d9bf77eb76a8a34acb0dc25e8da; cookie1=BqR0mKeOe2vD1pBYqeK4oaGfS67hHoi0ws0I5yiA8rE%3D; unb=2456724712; t=4114beb87b55d7bf8657983676f73879; skt=9c9648e300da3ec9; _nk_=%5Cu76D2%5Cu5B50tab04; _l_g_=Ug%3D%3D; cookie17=UUwVYuBz8JZ%2B8g%3D%3D; hng=; login=true; ucn=unsz; otherx=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0; whl=-1%260%260%260; l=AgAA9fviDMjWj2jHKoGqVyNPUIDSpORT; isg=5BA46A709BF6C4E2EE2734E5A6787999',
                'upgrade-insecure-requests':1,
                'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
            },
            encoding:null //若网页是GBK编码，需要返回二进制字节流
        },
        encode:'GBK',
        key_sort:{
            'content' :[
                {
                    'title': 'logic no',
                    'selector' : '.trade-detail-prompt .trade-detail-logistic',
                    'method':'attr',
                    'param':'data-mail-no'
                },
                {
                    'title': 'logic company',
                    'selector' : '.trade-detail-prompt .trade-detail-logistic',
                    'method':'attr',
                    'param':'data-company-name'
                }

            ]
        }
    }

    this.index = {
        //使用原生方法
        option:{
            hostname: 'https://trade.tmall.com/detail/orderDetail.htm?bizOrderId=1295119541062436',
            port: 443,
            path: '/',
            method: 'GET',
            headers:{
                'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'accept-language':'zh-CN,zh;q=0.8,en;q=0.6',
                'cookie':'thw=cn;cna=N2vXDhMwlVwCAQEMdb9ogoQe;_tb_token_=v2u69i3e0Bipcz;v=0;uc3=nk2=qEffhZnG&id2=UoLZXB%2FgrD5q&vt3=F8dAScAc2Tz9%2FH6qTtE%3D&lg2=UIHiLt3xD8xYTw%3D%3D; existShop=MTQ0ODc5MDUzOA%3D%3D; lgc=%5Cu5B59%5Cu7115%5Cu5C71; tracknick=%5Cu5B59%5Cu7115%5Cu5C71; sg=%E5%B1%B140; cookie2=1c2f65e13e6eafc13cd906b8205e5152; cookie1=AHsuVyo%2BK%2BEanGRJgMpheCUyRru%2BHmVWXYV%2FIcAKdtA%3D; unb=135023624; skt=07e26cce669fb6ec; t=4114beb87b55d7bf8657983676f73879; _cc_=Vq8l%2BKCLiw%3D%3D; tg=0; _l_g_=Ug%3D%3D; _nk_=%5Cu5B59%5Cu7115%5Cu5C71; cookie17=UoLZXB%2FgrD5q; mt=ci=1_1; uc1=cookie14=UoWzUa28Mr1Bkw%3D%3D&existShop=false&cookie16=W5iHLLyFPlMGbLDwA%2BdvAGZqLg%3D%3D&cookie21=W5iHLLyFeYTE&tag=7&cookie15=Vq8l%2BKCLz3%2F65A%3D%3D&pas=0; isg=4B86F136AD70ED5DF4954234E62D63BC; whl=-1%260%260%260; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0%26__ll%3D-1%26_ato%3D0; l=AggI4DGiVlpon3CvcqnSKe37WHgaYWy7',
                'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
            }
        }
    }
}

exports.taobao = taobao;