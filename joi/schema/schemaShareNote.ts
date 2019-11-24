import Joi from 'joi';

export default class SchemaShareNote {
    private schema: Object;

    constructor() {
        this.schema = Joi.object().keys({
            ShareNoteID: Joi.string().min(0).max(20),
            Cover: Joi.string().min(0).max(50),
            Subject_Name: Joi.string().min(0).max(50),
            Section: Joi.number().integer().min(0).max(3).positive(),
            Instructor_Name: Joi.string().min(0).max(50),
            Semeter: Joi.number().integer().min(0).max(2).positive(),
            Title: Joi.string().min(0).max(50),
            UserID: Joi.string().min(0).max(20)
        })
    }

    getSchema() {
        return this.schema;
    }
}