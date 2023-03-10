import express from "express";
import cors from "cors";
import session from "express-session"
import dotenv from "dotenv"
//import db from "./config/Database.js"
//#================
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from  "./routes/ProductRoute.js"
///////////////////////
dotenv.config();

const app = express();
/*(async()=>{
    await db.sync();
})();*/
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:"auto",
    }
}
))
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use(express.json())
app.use(UserRoute);
app.use(ProductRoute);
const PORT = process.env.PORT || process.env.APP_PORT
app.listen(PORT,()=>{
    console.log("server up and running...")
})