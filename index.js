const express = require('express');
const app = express();


//handle request to http://120.0.0.1:3000/
app.get("/", (req, res) => {
	
	res.send("hola mundo");
});

app.listen(3000, () =>{
	console.log("Server is running...");
});