const express = require ('express');
const app = express ()
const port =2005
const path = require ('path')

// levantando servidor
app.listen(port, ()=> console.log('ejecutandose en el puerto 2005'))

// determinar la ruta de los recursos aportados - imagenes- videos- etc
app.use(express.static(path.resolve(__dirname, '../public')))

console.log (__dirname, '../public');

//se determina las rutas de las diferentes paginas web que tendra la pagina web.
// ruta principal de la pagina web
app.get ('/', (req, res)=>{
    res. sendFile(path.resolve(__dirname, './views/fusionFruit.html'))
})