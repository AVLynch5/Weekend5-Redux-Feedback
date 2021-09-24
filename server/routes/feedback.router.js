//feedback.router.js

const express = require('express');
const router = express.Router();
//to communicate with database
const pool = require('../modules/pool.js');

//GET
router.get('/', (req, res) => {
    //GET query to DB - newest feedback (highest ID) at top
    const queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText).then((result) => {
        console.log('Retrieved feedback data from DB', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error during GET from DB', error);
        res.sendStatus(500);
    })
})

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
router.delete('/:id', (req, res) => {
    const feedbackId = req.params.id;
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId]).then((result) => {
        console.log('DELETED feedback with ID', feedbackId);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error deleting feedback with ID', feedbackId);
        res.sendStatus(500);
    })
})

module.exports = router;