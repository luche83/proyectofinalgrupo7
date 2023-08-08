module.exports = {
    login : (req, res) => {
       return res.render('login')
    },
    register : (req, res) => {
        return res.render('register')
    },
    perfil : (req, res) => {
        return res.render('perfil')
    },
}