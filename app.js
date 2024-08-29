const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

app.get('/usuarios',(req,res)=>{
  
    res.send(usuarios)
})
  
app.post('/usuarios',(req,res)=>{
    const newUser = {
        id: usuarios.length +1,
        nombre: req.query.name,
        edad: req.query.age,
        lugarProcedencia: req.query.place
    }

    usuarios.push(newUser)

    res.status(200).send('OK')
})

app.get('/usuarios/:nombre',(req,res)=>{
    const userName = req.params.nombre
    const specificUser = usuarios.find(usuario => userName === usuario.nombre)
    res.send(specificUser)
    
})

app.use((req,res)=>{
    res.status(404).send('Not found')
})

  app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto 3000');
  });