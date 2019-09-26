const express = require('express');
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

app.listen(3000, () =>{
	console.log("Server is running...");
});

app.get("/:nombre"+"/:edad", (req, res) => {
	personas.nombre=req.params.nombre;
	personas.edad=req.params.edad;
	res.send("hola mundo");
    console.log(personas);
});



