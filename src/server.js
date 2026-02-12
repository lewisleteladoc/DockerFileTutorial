const express = require('express');
const app = express();
const currentTime = new Date();

app.get('/', (req,res)=>{
     res.send(`Hello from Galaxy! ${currentTime}}`); 
 });

app.listen(3000, function () {
    console.log("app listening on port 3000");
});