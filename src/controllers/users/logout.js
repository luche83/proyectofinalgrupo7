module.exports = (req, res) => {   
    req.session.destroy()
    res.cookie('raicesArgentinas', null,{
        maxAge : -1
    })

    return res.redirect('/')
}