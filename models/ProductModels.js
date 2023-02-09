import { DataTypes, Sequelize } from "sequelize"
import db from "../config/Database.js"
import Users from "./Usermodels.js";
const {dataTypes} = Sequelize;
const Product = db.define('product',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,1000]
        }
    },
    price:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    }
}, {
    freezeTableName:true,
})
 Users.hasMany(Product);
 Product.belongsTo(Users,{foreingKey:'userId'})
export default Product;

