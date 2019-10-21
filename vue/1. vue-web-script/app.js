//导入http内置模块
const http = require('http');
//解析url为 pathname query
const url_1 = require('url');

//创建服务器
http.createServer(function (request, response) {
    //发送http头部
    //http状态值 200：ok
    // 内容类型:text/plain
    //response.writeHead(200, {'Content-Type':'text/plain'});
    const { pathname: url, query } = url_1.parse(request.url, true);

    var person = {
        name: 'xiaoming',
        age: 300,
        'hello': 'fine'
    }

    if (url === '/getscript') {
        //发送响应数据
        response.end(`${query.callback}(${JSON.stringify(person)})`);
        response.end(person);
    }
    else
        response.end('404');
}).listen('10086');


console.log('running...');