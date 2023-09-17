const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, surname, email, password, birthday, address, city, province, image}) {

    this.id = uuidv4();
    this.role = 'user';
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.birthday = null;
    this.address = null;
    this.city = null;
    this.province = null;
    this.image = null;
    this.createAt = new Date;


}

module.exports = User