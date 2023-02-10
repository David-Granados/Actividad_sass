const express = require('express') //Requerimos Express
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index")
})
module.exports = router;
