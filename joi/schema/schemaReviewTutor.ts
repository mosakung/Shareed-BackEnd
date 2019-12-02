import Joi from 'joi';

export default class SchemaReviewTutor {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            ReviewTutorID: Joi.string().min(0).max(20),
            TutorName: Joi.string().min(0).max(50),
            Academy: Joi.string().min(0).max(50),
            Subject_Teach: Joi.string().min(0).max(50),
            Des: Joi.string().min(0).max(200),
            ContactLink: Joi.string().min(0).max(200),
            Title: Joi.string().min(0).max(50),
            Cover: Joi.string().min(0).max(50),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}