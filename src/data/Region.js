const { v4: uuidv4 } = require('uuid');
// uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const Region = function ({title, image}) {

    this.id = uuidv4();
    this.title = title.trim();
    this.image = null;
    this.createAt = new Date
}

module.exports = Region;