const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/api/v1/customerfeedbacks/:id', async(req, res) => {
    const results = await db.query(`SELECT * FROM feedbacks WHERE customer_id=${req.params.id}`)
    // res.status(200).json({
        res.status(200).send({
        status:'success',
        data:{
            feedbacks:results.rows
        }
    })
})
router.post('/api/v1/customerfeedbacks', async(req, res) => {
    const results = await db.query(`INSERT INTO feedbacks (content,customer_id) values('${req.body.content}',${req.body.customer_id}) RETURNING content,id,customer_id`)
    res.status(201).send(results.rows)
})
module.exports = router;