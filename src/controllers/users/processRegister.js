const { v4: uuidv4 } = require('uuid');
const { readJSON, writeJSON } = require('../../data');
const {hashSync} = require('bcryptjs');

module.exports = (req, res) => {

    const users = readJSON('users.json');
    
    users.push({

        //id : products.length ? products[products.lenth -1 ].id +1 : 1,
        id : uuidv4(),
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        category : "user",
        password : hashSync(req.body.password, 10),
        password2 : hashSync(req.body.password2, 10),
        image: req.file ? req.file.filename : null,
        
    });

    writeJSON(users, 'users.json');

    return res.redirect('/users/register')
}


/*const { readJSON, writeJSON } = require('../../data');
const User = require('../../data/User')

module.exports = (req, res) => {

    const users = readJSON('users.json');

    const user = new User(req.body);

    users.push(user);

    writeJSON(users, 'users.json');

    return res.redirect('/admin')
}*/