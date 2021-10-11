const express = require('express');
const router = express.Router();
const db = require('../db');
router.get('/api/v1/customers', async(req, res) => {
    const results = await db.query("SELECT * FROM customers ")
    res.status(200).json({
        status:'success',
        data:{
            customers:results.rows
        }
    })
})
router.post('/api/v1/customers', async(req, res) => {
    const results = await db.query(`INSERT INTO customers (name) values('${req.body.name}') RETURNING id,name`)
    res.status(201).send(results.rows)
})

module.exports = router;