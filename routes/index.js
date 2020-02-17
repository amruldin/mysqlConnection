
const indexController = require('../controllers/index');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();
const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));






router.get('/createUser', indexController.createUser);
router.post('/postInfo',indexController.postData);


router.get('/', indexController.getIndex);





module.exports = router;






