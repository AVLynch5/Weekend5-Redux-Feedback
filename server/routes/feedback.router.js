//feedback.router.js

const express = require('express');
const router = express.Router();
//to communicate with database
const pool = require('../modules/pool.js');

//GET

//POST - add feedback obj to DB
router.post('/', (req, res) => {
    const newFeedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newFeedback.form1, newFeedback.form2, newFeedback.form3, newFeedback.form4]
    ).then((results) => {
        console.log('Added new feedback!');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding new feedback via POST', error);
        res.sendStatus(500);
    })
})

//DELETE

module.exports = router;