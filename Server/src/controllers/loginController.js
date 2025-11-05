const conexion = require ('../models/db.js')

module.exports.login = (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
}