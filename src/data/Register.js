// uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const { v4: uuidv4 } = require('uuid');

const Register = function ({firstname, lastname, category, email, password, image}) {

    this.id = uuidv4();
    this.firstname = firstname.trim();
    this.lastname = lastname.trim();
    this.email = email;
    this.category = category;
    this.password = password;
    this.image = image;
    this.createAt = new Date;
}

module.exports = Register;