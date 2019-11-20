export default class SqlDelete {
    private sqlDeleteShareNote : string;
    private sqlDeleteShareEvent : string;
    private sqlDeleteReviewSubject : string;
    private sqlDeleteReviewTutor : string;
    private sqlDeleteReviewBook : string;
    private sqlDeleteFaq : string;
    private sqlDeleteComment : string;
    private sqlDeleteOnwerShareNote : string
    private sqlDeleteOnwerShareEvent : string
    private sqlDeleteOnwerReviewSubject : string
    private sqlDeleteOnwerReviewTutor : string
    private sqlDeleteOnwerReviewBook : string
    private sqlDeleteOnwerFaq : string
    private sqlDeleteOnwerCommnet : string

    constructor() {
        this.sqlDeleteShareNote = '';
        this.sqlDeleteShareEvent = '';
        this.sqlDeleteReviewSubject = '';
        this.sqlDeleteReviewTutor = '';
        this.sqlDeleteReviewBook = '';
        this.sqlDeleteFaq = '';
        this.sqlDeleteComment = '';
        this.sqlDeleteOnwerShareNote = 'SELECT UserID as userId';
        this.sqlDeleteOnwerShareEvent = '';
        this.sqlDeleteOnwerReviewSubject = '';
        this.sqlDeleteOnwerReviewTutor = '';
        this.sqlDeleteOnwerReviewBook = '';
        this.sqlDeleteOnwerFaq = '';
        this.sqlDeleteOnwerCommnet = '';
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

    getSqlOwner() {
        return this.sqlDeleteOnwer;
    }
}