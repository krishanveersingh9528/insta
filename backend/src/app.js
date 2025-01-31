import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser"



const app = express();


app.use(cors({
    origin : process.env.ORIGIN,
    credentials : true
}))
// extend the limit as needed
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({
    limit : "10mb",
    extended : true
}))

app.use(express.static("public"))
app.use(cookieParser())


// import routes here 




// routes declaration 



export default app;