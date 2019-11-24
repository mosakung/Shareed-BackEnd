import Joi from '@hapi/joi';

export default class SchemaPicture {
    private schema: Object;

    constructor() {
        this.schema = Joi.object({
            PictureID: Joi.string().min(0).max(20),
            Picture: Joi.string().min(0).max(50),
            PostID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}