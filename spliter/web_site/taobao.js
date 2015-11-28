var taobao = function() {
    this.nanzhuang = {
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
}