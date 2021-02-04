const app = require('./src/server.js');
const port = process.env.PORT || 8000;

//Server for local running
app.listen(port, () =>{
	console.log(`Listening on: http://localhost:${port}`);
});