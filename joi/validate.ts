import Joi from '@hapi/joi';
import SchemaComment from './schema/schemaComment';
import SchemaFaq from './schema/schemaFaq';
import SchemaPicture from './schema/schemaPicture';
import SchemaReviewBook from './schema/schemaReviewBook';
import SchemaReviewSubject from './schema/schemaReviewSubject';
import SchemaReviewTutor from './schema/schemaReviewTutor';
import SchemaShareEvent from './schema/schemaShareEvent';
import SchemaShareNote from './schema/schemaShareNote';

export default class JoiValidate {
    private SchemaComment: SchemaComment;
    private SchemaFaq: SchemaFaq;
    private SchemaPicture: SchemaPicture;
    private SchemaReviewBook: SchemaReviewBook;
    private SchemaReviewSubject: SchemaReviewSubject;
    private SchemaReviewTutor: SchemaReviewTutor;
    private SchemaShareEvent: SchemaShareEvent;
    private SchemaShareNote: SchemaShareNote;

    constructor () {
        
    }
}