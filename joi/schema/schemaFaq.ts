import Joi from '@hapi/joi';

export default class SchemaFaq {
    private schema: Object;
    private mediumtext: number = 16777215;

    constructor() {
        this.schema = Joi.object().keys({
            FAQID: Joi.string().min(0).max(20),
            title: Joi.string().min(0).max(50),
            description: Joi.string().min(0).max(this.mediumtext),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}