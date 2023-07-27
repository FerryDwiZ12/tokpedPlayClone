const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videos.controller');


router.get('/', videoController.getAllVideos);
router.get('/by-title/:titleVideo', videoController.getVideosByTitle);
router.post('/', videoController.addVideo);

module.exports = router;
