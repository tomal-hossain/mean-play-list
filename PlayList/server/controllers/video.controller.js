const videoService = require('../services/video.service');
const videoValidator = require('../validators/video.validation');

module.exports = {
    getAllVideos: async(req, res) => {
        const videos = await videoService.getAll();
        if (videos) {
            res.status(200).send(videos);
        } else {
            res.status(404).send('No videos found!');
        }
    },

    getVideo: async(req, res) => {
        const video = await videoService.getOne(req.params.id);
        if (video) {
            res.status(200).send(video);
        } else {
            res.status(404).send('video not found!');
        }
    },

    addVideo: async(req, res) => {
        const model = Object.freeze(req.body);
        const {error} = videoValidator.validateVideo(model);
        if(error) {
           res.status(400).send(error.details[0].message);
        } else {
            const video = await videoService.add(model);
            if(video) {
                res.status(200).send(video);
            } else {
                res.status(500).send('Unable to add video, please try again!');
            }
        }
    },

    updateVideo: async(req, res) => {
        const model = Object.freeze(req.body);
        const {error} = videoValidator.validateVideo(model);
        if(error) {
            res.status(400).send(error.details[0].message)
        }
        const video = await videoService.update(req.params.id, model);
        if (video) {
            res.status(200).send(video);
        } else {
            res.status(404).send('Video not found!');
        }
    },

    deleteVideo: async(req, res) => {
        const status = await videoService.delete(req.params.id);
        if (status) {
            res.status(200).send('Successfully deleted!');
        } else {
            res.status(404).send('Video not found!');
        }
    }
}