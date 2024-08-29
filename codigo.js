app.get('/', (req, res) => {
    res.send(`
    <h1>Lista de usuarios</h1>
    <ul>
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id}| Nombre: ${usuario.nombre}|Edad: ${usuario.edad}|Lugar de Procendencia: ${usuario.lugarProcedencia}</li>`)
      .join('')}
      </ul>
       <a href="/usuarios">Usuarios json</a>`);
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });
  
  app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: req.body.nombre,
    };
    usuarios.push(nuevoUsuario);
    res.redirect('/');
  });