const { v4: uuidv4 } = require('uuid');
const Register = require('../../data/User');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const users = readJSON('users.json');

    /*const newProduct = new Product(req.body);*/

    users.push({

        /*id : products.length ? products[products.lenth -1 ].id +1 : 1,*/
        id : uuidv4(),
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        category : req.body.category,
        password : req.body.password,
        image: req.file ? req.file.filename : null,
    });

    writeJSON(users, 'users.json');

    return res.redirect('/users/login')
}





/*const Usuario = require('../../data/Usuario');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const usuarios = readJSON('usuarios.json');

    const newUsuario = new Usuario(req.body);

    usuarios.push(newUsuario);

    writeJSON(usuarios, 'usuarios.json');

    return res.redirect('/admin')
}*/