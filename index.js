const express = require('express');
const app = express();
var cons = require('consolidate');
app.engine('html', cons.swig)
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/home', (req, res) => {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.post('/upload_image', (req, res) => {
	res.send('Hello there!');
});



app.listen(3000, () => console.log('Server running on port 3000!'));