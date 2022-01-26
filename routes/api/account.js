const express = require('express')
const router = express.Router();
//import mongodb from 'mongodb'

router.get('/', function (req, res, next) {
    res.send('respond account');
});

module.exports = router