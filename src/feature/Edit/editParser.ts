import Joi from 'joi';
import SchemaShareNote from '../../schema/schemaShareNote';
import SchemaShareEvent from '../../schema/schemaShareEvent';
import SchemaReviewSubject from '../../schema/schemaReviewSubject';
import SchemaReviewTutor from '../../schema/schemaReviewTutor';
import SchemaReviewBook from '../../schema/schemaReviewBook';
import SchemaFaq from '../../schema/schemaFaq';
import SchemaComment from '../../schema/schemaComment';
import SchemaPicture from '../../schema/schemaPicture';

export default class EditPaser {
    private schemaShareNote: SchemaShareNote;
    private schemaShareEvent: SchemaShareEvent;
    private schemaReviewSubject: SchemaReviewSubject;
    private schemaReviewTutor: SchemaReviewTutor;
    private schemaReviewBook: SchemaReviewBook;
    private schemaFaq: SchemaFaq;
    private schemaComment: SchemaComment;
    private schemaPicture: SchemaPicture;

    constructor(
        schemaShareNote: SchemaShareNote,
        schemaShareEvent: SchemaShareEvent,
        schemaReviewSubject: SchemaReviewSubject,
        schemaReviewTutor: SchemaReviewTutor,
        schemaReviewBook: SchemaReviewBook,
        schemaFaq: SchemaFaq,
        schemaComment: SchemaComment,
        schemaPicture: SchemaPicture
    ) {
        this.schemaShareNote = schemaShareNote;
        this.schemaShareEvent = schemaShareEvent;
        this.schemaReviewSubject = schemaReviewSubject;
        this.schemaReviewTutor = schemaReviewTutor;
        this.schemaReviewBook = schemaReviewBook;
        this.schemaFaq = schemaFaq;
        this.schemaComment = schemaComment;
        this.schemaPicture = schemaPicture;
    }

    async 
}