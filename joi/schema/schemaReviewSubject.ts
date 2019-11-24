import Joi from 'joi';

export default class SchemaReviewSubject {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            ReviewSubjectID: Joi.string().min(0).max(20),
            SubjectID: Joi.string().min(0).max(20),
            SubjectName: Joi.string().min(0).max(100),
            Instructor_Name: Joi.string().min(0).max(50),
            Des: Joi.string().min(0).max(200),
            Title: Joi.string().min(0).max(50),
            Section: Joi.number().integer().min(0).max(3),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}