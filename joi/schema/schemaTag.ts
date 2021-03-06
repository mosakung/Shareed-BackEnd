import Joi from 'joi';

export default class SchemaTag {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            TagDetail: Joi.string().min(0).max(200),
            PostID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}