import Joi from 'joi';

export default class SchemaShareEvent {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            ShareEventID: Joi.string().min(0).max(20),
            Cover: Joi.string().min(0).max(50),
            Resgister: Joi.string().min(0).max(50),
            Location: Joi.string().min(0).max(100),
            Condi: Joi.string().min(0).max(200),
            Describ: Joi.string().min(0).max(200),
            Title: Joi.string().min(0).max(50),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}