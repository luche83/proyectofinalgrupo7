const { v4: uuidv4 } = require('uuid');
// uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const Usuario = function ({firstName, lastName, email, password, password2, image}) {

    this.id = uuidv4();
    this.firstName = firstName.trim();
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.password2 = password2;
    this.image = image;
    this.createAt = new Date;
}

module.exports = Usuario;