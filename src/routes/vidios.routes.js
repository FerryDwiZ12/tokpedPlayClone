const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videos.controller');

router.get('/', videoController.getAllVideos);
router.post('/', videoController.addVideo); 

module.exports = router;
