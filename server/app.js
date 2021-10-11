require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors=require('cors')
const app = express()
// var nodemon = require('nodemon');
// nodemon.emit('quit');
app.use(cors())
app.use(express.json());

app.get('/api/v1/customers', async(req, res) => {
    const results = await db.query("SELECT * FROM customers ")
    console.log('db customers here')
    console.log(results)
    res.status(200).json({
        status:'success',
        data:{
            customers:results.rows
        }
    })
})
app.post('/api/v1/customers', async(req, res) => {
    console.log("My new customer"+req.body.name)
    const results = await db.query(`INSERT INTO customers (name) values('${req.body.name}') RETURNING id,name`)
    res.status(201).send(results.rows)
})

app.get('/api/v1/customerfeedbacks/:id', async(req, res) => {
    console.log("The params"+req.params.id);
    const results = await db.query(`SELECT * FROM feedbacks WHERE customer_id=${req.params.id}`)
    console.log('db feedbacks here')
    console.log(results)
    // res.status(200).json({
        res.status(200).send({
        status:'success',
        data:{
            feedbacks:results.rows
        }
    })
})
// nodemon.emit('quit');
app.post('/api/v1/customerfeedbacks', async(req, res) => {
    const results = await db.query(`INSERT INTO feedbacks (content,customer_id) values('${req.body.content}',${req.body.customer_id}) RETURNING content,id,customer_id`)
    res.status(201).send(results.rows)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('running on port' + port)
})

// "start": "nodemon app.js"