const Joi = require('joi');

exports.validateVideo = (video) => {
    const schema =Joi.object({
        title: Joi.string().required().min(5).max(30),
        description: Joi.string().required().min(10).max(300),
        url: Joi.string().required().uri()
    });
    return schema.validate(video);
}