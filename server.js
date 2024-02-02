const express = require('express')

const app = express()



//routes
app.get('/',(req,res) => {
    res.send("Magic Glass");
});

const PORT = 8000;

app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
});