import "reflect-metadata"
import express, {Request, Response, NextFunction}from 'express';
import 'express-async-errors';
import {router} from "./routes";
const app = express();
import "./database"

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=> {
if(err instanceof Error) {
return response.status(400).json({
    error: err.message,
    status: "Error"
});
}
return response.status(500).json({error: "Internal Error Server"})
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Running in port 3000'));
 