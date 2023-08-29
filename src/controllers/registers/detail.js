const { readJSON, writeJSON } = require('../../data');

module.exports = (req, res) => {

    const registers = readJSON('registers.json');

    const register = registers.find(register => register.id === req.params.id);

    return res.render('registerDetail', {
        ...register,
        
    })
 }