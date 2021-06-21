import express from "express";
const app = express();




app.get('/test', (req, res) => {
    return res.send("ola...");
})

app.post('/test-post', (req, res) => {
    return res.send("olaPost...");
})


app.listen(3000, () => {
    console.log("Server is running");
});
