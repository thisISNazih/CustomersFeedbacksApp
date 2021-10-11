require('dotenv').config();
const express = require('express');
const cors=require('cors')
const customersRouter = require('./routes/customers')
const feedbackssRouter = require('./routes/feedbacks')
const app = express()


app.use(cors())
app.use(express.json());
app.use(customersRouter);
app.use(feedbackssRouter);



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('running on port' + port)
})

