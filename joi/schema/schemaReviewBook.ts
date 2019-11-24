import Joi from '@hapi/joi';

export default class SchemaReviewBook {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            ReviewBookID: Joi.string().min(0).max(20),
            Cover: Joi.string().min(0).max(50),
            Title: Joi.string().min(0).max(50),
            WrittenBy: Joi.string().min(0).max(50),
            Edition: Joi.string().min(0).max(5),
            Link: Joi.string().min(0).max(200),
            Des: Joi.string().min(0).max(200),
            BookName: Joi.string().min(0).max(100),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}