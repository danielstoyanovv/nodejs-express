import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.listen(3000);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
//assets middleware
app.use('/public/assets', express.static('public/assets'));

app.get('/', function (req, res) {
    res.send('welcome to home page');
});

app.get('/users/:id', function (req, res) {
    const userData = {
        id: req.params.id,
        name: 'Daniel Marinov Stoyanov',
        hobbies: ['eating', 'fishing', 'travelling'],
        page_title: 'Users page'
    };
    res.render('users/index', userData);
});

app.get('/products/:slug', function (req, res) {
    res.send('Product slug: ' + req.params.slug);
});

app.get('/registration', function (req, res) {
    res.render('users/registration', {
       // page_title: 'Registration'
    });
});

app.post('/registration', urlencodedParser, function (req, res) {
    console.log(req.body);
});

// const server = http.createServer(function (req, res) {
//     console.log('request was made by ' + req.url);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write('Hello World!');
//     res.end();
// });

// server.listen(8080, '127.0.0.1');
// console.log('listening to 8080');
