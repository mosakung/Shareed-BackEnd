export default class SqlDelete {
    private sqlDeleteShareNote : string;
    private sqlDeleteShareEvent : string;
    private sqlDeleteReviewSubject : string;
    private sqlDeleteReviewTutor : string;
    private sqlDeleteReviewBook : string;
    private sqlDeleteFaq : string;
    private sqlDeleteComment : string;

    constructor() {
        this.sqlDeleteShareNote = '';
        this.sqlDeleteShareEvent = '';
        this.sqlDeleteReviewSubject = '';
        this.sqlDeleteReviewTutor = '';
        this.sqlDeleteReviewBook = '';
        this.sqlDeleteFaq = '';
        this.sqlDeleteComment = '';
    }

    getSqlShareNote() {
        return this.sqlDeleteShareNote;
    }

    getSqlShareEvent() {
        return this.sqlDeleteShareEvent;
    }

    getSqlReviewSubject() {
        return this.sqlDeleteReviewSubject;
    }

    getSqlReviewTutor() {
        return this.sqlDeleteReviewTutor;
    }

    getSqlReviewBook() {
        return this.sqlDeleteReviewBook;
    }

    getSqlFaq() {
        return this.sqlDeleteFaq;
    }

    getSqlComment() {
        return this.sqlDeleteComment;
    }
}