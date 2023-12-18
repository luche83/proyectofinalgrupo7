const db = require("../../database/models");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
        
        
const NorteGrandeArgentino = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 1
    }

})

const Centro = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 2
    }

})

const NuevoCuyo = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 3
    }

})

const Patagonia = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 4
    }

})

const Litoral = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 5
    }

})
const BuenosAires = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 6
    }

})

const CostaAtlantica = db.Product.findAll({
    include : ['images'],
    where : {
        regionId : 7
    }

})

      Promise.all([NorteGrandeArgentino, Centro, NuevoCuyo, Patagonia, Litoral, BuenosAires, CostaAtlantica])

      .then(([NorteGrandeArgentino, Centro, NuevoCuyo, Patagonia, Litoral, BuenosAires, CostaAtlantica]) => {

        return res.render('Regions',{NorteGrandeArgentino, Centro, NuevoCuyo, Patagonia, Litoral, BuenosAires, CostaAtlantica, toThousand}  )
      })
      .catch(error => console.log(error))
        
}
 