const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require('./routes/router')
const conrouter = require('./routes/conrouter')
const mongoose = require('mongoose');
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const corseOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

const dbOptiosns = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect('mongodb+srv://shore:shore@cluster0.uubfvtd.mongodb.net/registration',dbOptiosns)
.then(() => console.log("DB connected!"))
.catch(err => console.log(err))

app.use(cors(corseOptions))
app.use('/',conrouter)
app.use('/', router)

const PORT = 5000


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

console.log(server)