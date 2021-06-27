import "reflect-metadata";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import  "./database";



const app = express();
app.use(express.json());
app.use(cors);
app.use(router);

app.listen(4000, () => {
return console.log("Server is Running " + "http://localhost:4000");
});
