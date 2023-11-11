const {html} = require('./util');

const {homePage} = require('./controllers/homeController');
const {aboutPage} = require('./controllers/aboutController');
const {catalogPage} = require('./controllers/catalogController');
const {defaultPage} = require('./controllers/defaultPageController');

const http = require('http');









const routes = {
    '/': homePage,
    '/catalog':catalogPage,
    '/about': aboutPage
}

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = routes[url.pathname];

    if (typeof handler == 'function') {

        handler(req,res);

    } else {

       defaultPage(req,res);

    }

});

server.listen('3000');
console.log('server listening for requests at port 3000...');

