import {Sequelize} from "sequelize";

const db = new Sequelize('heroku_a0658b84188563d','b75aa281a38eb4','d19bed82',{
    host:"us-cdbr-east-06.cleardb.net",
    dialect:"mysql"
})

export default db;