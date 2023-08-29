const { v4: uuidv4 } = require('uuid');
const Register = require('../../data/Register');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const registers = readJSON('registers.json');

    /*const newProduct = new Product(req.body);*/

    registers.push({

        /*id : products.length ? products[products.lenth -1 ].id +1 : 1,*/
        id : uuidv4(),
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        category : req.body.category,
        password : req.body.password,
        image: req.file ? req.file.filename : null,
    });

    writeJSON(registers, 'registers.json');

    return res.redirect('/admin')
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