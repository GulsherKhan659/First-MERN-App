const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')


const app = express()
const routee = require('./router/todoapp')
const PORT = process.env.PORT || 5000



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MernToDoApp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(cors())
app.use(express.json())
app.use('/todo/api/v2', routee.ToAppRoute)
app.get('/', (req, res) => {
    res.send("HELLO")
})


app.listen(PORT, () => {
    console.log("PORT => :", PORT)
})

