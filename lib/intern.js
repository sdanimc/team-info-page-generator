const employee = require('./employee');
class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){};
    getRole(){};
}
module.exports = intern;