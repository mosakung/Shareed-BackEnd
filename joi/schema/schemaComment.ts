import Joi from '@hapi/joi';

export default class SchemaComment {
    private schema: Object;

    constructor() {
        this.schema = Joi.object({
            CommentID: Joi.string().min(0).max(20),
            Detail: Joi.string().min(0).max(200),
            PostID: Joi.string().min(0).max(20),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}