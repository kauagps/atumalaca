const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    // if(req.url === '/') {
    //     
    // }
    // if(req.url === '/name&url') {
    //    res.end('teste') 
    // }
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data,null,2),
            err => {
                if (err) throw err
                cb('Operação realizada com sucesso!')
            }
        )
    }
    const { name, url, del } = URL.parse(req.url, true).query
    const data = require('./urls.json');

    if (!name || !url){    
        res.end(JSON.stringify(data));
    }
    if (del) {
        //return res.end('delete')
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }

    //return res.end('create')
    data.urls.push({name,url})
    return writeFile(message => res.end(message))
}).listen(3000, () => console.log('API rodando...'));