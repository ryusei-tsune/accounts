const express = require('express')
const router = express()

router.use('/', require('./process'))
router.use('/account', require('./account'))

module.exports = router