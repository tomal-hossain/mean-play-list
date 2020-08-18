const Video = require('../models/video.type');

module.exports = {
    getAll: async() => {
        try {
            return await Video.find();
        } catch {
            return false;
        }
    },

    getOne: async(id) => {
        try {
            return await Video.findById(id);
        } catch {
            return false;
        }

    },

    add: async(model) => {
        const video = createModel(model);
        try {
            return await video.save();
        } catch {
            return false;
        }
    },

    update: async(id, model) => {
        try {
            return await Video.findByIdAndUpdate(
                { _id: id },
                { $set: { title: model.title, description: model.description, url: model.url } },
                { new: true },
                function (err, res) {
                    if(!err) {
                        return res;
                    }
                    return false;
                }
            );
        } catch {
            return false;
        }
    },

    delete: async(id) => {
        try {
            const video = await Video.findByIdAndDelete(id);
            if(video){
                return true;
            } else {
                return false;
            }
        } catch {
            return err;
        }
    }
}

function createModel(model) {
    let video = new Video();
    video.title = model.title;
    video.description = model.description;
    video.url = model.url;
    video.addedDate = Date.now();
    return video;
}