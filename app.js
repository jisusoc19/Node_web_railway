require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 8080;


//hansdlerbhar
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {});


//renderizar cosas hbs
// miles west servir contenido estatico 
app.use(express.static('public'));

app.get('/',(req, res)=> {
    res.render('home', {
        nombre: ' jesus',
        titulo: ' trabajo node',

    });
})  

app.get('/generic',(req, res)=> {
    res.render('generic',{
        nombre: ' jesus',
        titulo: ' trabajo node',

    });
})  

app.get('/elements',(req, res)=> {
    res.render('elements',{
        nombre: ' jesus',
        titulo: ' trabajo node',

    });
})  

app.get('*',(req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})



app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
});