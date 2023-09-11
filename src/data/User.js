// uuidv4();  ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');


const User = function ({firstname, lastname, category, email, password, password2, image}) {

    this.id = uuidv4();
    this.firstname = firstname.trim();
    this.lastname = lastname.trim();
    this.email = email.trim();
    //this.category = category.trim();
    this.category = category.trim();
    this.password = hashSync(password, 10);
    this.password2 = hashSync(password2, 10);
   // this.password = password;
    this.image = image;
    this.createAt = new Date;
}

module.exports = User;