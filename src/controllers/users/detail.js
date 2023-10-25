
 const db = require('../../database/models')

module.exports = (req, res) => {

    db.User.findByPk(req.params.id, {
        include : ['images']
    })

    .then(user => {

        return res.render('userDetail', {
            ...user.dataValues,
            
        })

    })
    .catch(error => console.log(error))

    
 }