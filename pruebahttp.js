const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req);
    // informacion de la paginación como configuraciones en el respond headers de la pagina seccion nectwork
    res.setHeader('Content-Disposition', 'attachement; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'aplication/csv'});


    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    res.write("hola sapa\n");
    //siempre ones el end para la pagina
    res.end();

})
.listen(8080)
console.log("Servidor corriendo en el puerto 8080")