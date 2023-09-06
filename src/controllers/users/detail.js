const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const users = readJSON('users.json');

    const user = users.find(user => user.id === req.params.id);

    return res.render('userDetail', {
        ...user,
        
    })
 }