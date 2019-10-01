//index
/*const express = require('express');
const app = express();

var ids=[];
var personas={
	nombre:"", edad:0,
};



//handle request to http://120.0.0.1:3000/
app.get("/:id", (req, res) => {
	console.log(req.params.id);
	res.send("hola mundo");
	ids.push(req.params.id);
    console.log(ids);
});


app.get("/:nombre""/:edad", (req, res) => {
	personas.nombre=req.params.nombre;
	personas.edad=req.params.edad;
	res.send("hola mundo");
    console.log(personas);
});

app.listen(3000, () =>{
	console.log("Server is running...");
});*/

//pokemon

var express = require('express');
var app = express();
var pokedex = require('./pokedex.json');



app.get("/", (req, res) => {
	res.send('ingrese al pokedex');
	//console.log(pokedex);

});


app.get("/pokedex/random", (req, res) => {
	const num = Math.floor(Math.random()*(151-0)+0);
	res.json(pokedex.pokemon[num]);

});

app.get("/pokedex/:id", (req, res) => {
	const id = req.params.id;
	if (id > 0 && id <= 151) {
		res.json(pokedex.pokemon[req.params.id-1]);
	}
	else{
		res.send("No hay ningun pokemon con ese id");
	}
	
});

app.get("/pokedex/:name", (req, res) => {
	const name = req.params.name;
	const pokemon = pokedex.pokemon.filter((item) => {return item.name == name});

	res.json(pokemon);

});



app.get("/pokedex/img/:id", (req, res) => {
	const img = pokedex.pokemon[req.params.id-1].img;
	res.send("<img src='"+img+"'/>");

});




app.listen(3000, () =>{
	console.log("Server is running...");
});


