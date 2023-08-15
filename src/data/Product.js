const { v4: uuidv4 } = require('uuid');
// uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const Product = function ({title, category, price, discount, description, cant, cantMin, image}) {

    this.id = uuidv4();
    this.title = title.trim();
    this.category = category;
    this.price = +price;
    this.discount = +discount;
    this.description = description.trim();
    this.cant = +cant;
    this.cantMin = +cantMin;
    this.image = null;
}

module.exports = Product;