const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//const port = process.env.PORT || 8000;
//const baseUrl = `http://localhost:${port}`;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
	res.render('index', { personList: friendsList.getAll()});
});

app.post('/submit', (req, res) => {
	friendsList.add(req.body.friendName);
	res.render('person-added', { personName: req.body.friendName, personList: friendsList.getAll() });
});

//Server before using lambda
//app.listen(port, () =>{
//	console.log(`Listening on: http://localhost:${port}`);
// });
module.exports = app;


//
class InMemoryFriends{
	constructor(){
		this.list = [];
	}
	add(name){
		this.list.push(name);
	}
	getAll(){
		return this.list;
	}
}
const friendsList = new InMemoryFriends();