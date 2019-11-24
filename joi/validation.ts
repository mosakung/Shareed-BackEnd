import Joi from '@hapi/joi';
import SchemaComment from './schema/schemaComment';
import SchemaFaq from './schema/schemaFaq';
import SchemaPicture from './schema/schemaPicture';
import SchemaReviewBook from './schema/schemaReviewBook';
import SchemaReviewSubject from './schema/schemaReviewSubject';
import SchemaReviewTutor from './schema/schemaReviewTutor';
import SchemaShareEvent from './schema/schemaShareEvent';
import SchemaShareNote from './schema/schemaShareNote';
import SchemaTag from './schema/schemaTag';

export default class Validation {
    private schemaComment: SchemaComment;
    private schemaFaq: SchemaFaq;
    private schemaPicture: SchemaPicture;
    private schemaReviewBook: SchemaReviewBook;
    private schemaReviewSubject: SchemaReviewSubject;
    private schemaReviewTutor: SchemaReviewTutor;
    private schemaShareEvent: SchemaShareEvent;
    private schemaShareNote: SchemaShareNote;
    private schemaTag: SchemaTag;

    constructor() {
        this.schemaShareNote = new SchemaShareNote();
        this.schemaShareEvent = new SchemaShareEvent();
        this.schemaReviewSubject = new SchemaReviewSubject();
        this.schemaReviewTutor = new SchemaReviewTutor();
        this.schemaReviewBook = new SchemaReviewBook();
        this.schemaFaq = new SchemaFaq();
        this.schemaComment = new SchemaComment();
        this.schemaPicture = new SchemaPicture();
        this.schemaTag = new SchemaTag();
    }

    async validate(body: object, nameSchema: string) : Promise<any> {
        return Joi.validate(body, await this.getSchema(nameSchema), (err, value) => {
            if (err) throw new Error(err.message);
            else return value;
        });
    }

    async getSchema(nameSchema: string) : Promise<object | void> {
        if (nameSchema === 'sharenote') return this.schemaShareNote.getSchema();
        else if (nameSchema === 'shareevent') return this.schemaShareEvent.getSchema();
        else if (nameSchema === 'reviewsubject') return this.schemaReviewSubject.getSchema();
        else if (nameSchema === 'reviewtutor') return this.schemaReviewTutor.getSchema();
        else if (nameSchema === 'reviewbook') return this.schemaReviewBook.getSchema();
        else if (nameSchema === 'faq') return this.schemaFaq.getSchema();
        else if (nameSchema === 'comment') return this.schemaComment.getSchema();
        else if (nameSchema === 'picture') return this.schemaPicture.getSchema();
        else if (nameSchema === 'tag') return this.schemaTag.getSchema();
        else throw new Error('not found this schema');
    }
}