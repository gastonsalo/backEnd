const express = require("express");
const { on } = require("nodemon");
const fs = require("fs")

const app = express();

const PORT = 8080;

class Contenedor{
    constructor (archivo){
        this.archivo=archivo;
    }
    async traerTodos(){
        try{
            const infoProductos= await fs.promises.readFile(this.archivo);
            const productos = JSON.parse(infoProductos)
            return productos
        }catch(error){
            console.log('Hubo un error')
        }
    }

    async productoAlAzar(){
        try{
            const infoProductos= await fs.promises.readFile(this.archivo);
            const productos = JSON.parse(infoProductos);
            const azar = Math.floor(Math.random() * productos.length);
            return productos[azar];

        }catch(error){
            console.log('Hubo un error');
    }
}
}

let contenedor = new Contenedor("./productos.txt")
const server=app.listen(PORT,()=>{
    console.log(`El servidor esta funcionando en el puerto ${server.address().port}`)
});
server.on("error",error=>console.log(`Error en el servidor ${error}`));

app.get("/",(req,res)=>{
    res.send('<h1>Hola Mundo!</h1><a href="/productos"><h2>Todos los productos</h2></a> <a href="/productoRandom"><h2>Producto al azar</h2></a>')
})

app.get("/productos",(req,res)=>{
    contenedor.traerTodos().then(productos=>{
        res.send(`${JSON.stringify(productos)}`)
    })
    
})

app.get("/productoRandom",(req,res)=>{
    contenedor.productoAlAzar().then(azar=>{
        res.send(`${JSON.stringify(azar)}`)
    })
    
})