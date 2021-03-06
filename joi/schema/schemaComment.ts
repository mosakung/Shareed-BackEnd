import Joi from 'joi';

export default class SchemaComment {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            CommentID: Joi.number().integer(),
            Detail: Joi.string().min(0).max(200),
            PostID: Joi.string().min(0).max(20),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}