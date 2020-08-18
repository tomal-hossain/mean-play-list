const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controller');

router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideo);
router.post('/', videoController.addVideo);
router.put('/:id', videoController.updateVideo);
router.delete('/:id', videoController.deleteVideo);

module.exports = router