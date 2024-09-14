const express =require('express')
const app=express();
const db = require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // req body
const PORT=process.env.PORT || 3000;



// import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');


// app.get('/test', async (req, res) => {
//     console.log('test log')
//     res.send('test succesfull')
// })

// use the routers

app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000')
})


