const express = require('express');
const request = require('request');
const Rx = require('@reactivex/rxjs');

const router = express.Router();

const url = 'https://swapi.co/api/people/';

router.post('/star-wars-post', function(req,res){
    console.log("req.body sent to server" , req.body);
});

module.exports = router;
