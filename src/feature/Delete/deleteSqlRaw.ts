export default class SqlDelete {
    private sqlDeleteShareNote: string;
    private sqlDeleteShareEvent: string;
    private sqlDeleteReviewSubject: string;
    private sqlDeleteReviewTutor: string;
    private sqlDeleteReviewBook: string;
    private sqlDeleteFaq: string;
    private sqlDeleteComment: string;
    private sqlDeleteOnwerShareNote: string
    private sqlDeleteOnwerShareEvent: string
    private sqlDeleteOnwerReviewSubject: string
    private sqlDeleteOnwerReviewTutor: string
    private sqlDeleteOnwerReviewBook: string
    private sqlDeleteOnwerFaq: string
    private sqlDeleteOnwerCommnet: string
    private sqlCheckdShareNote: string
    private sqlCheckShareEvent: string
    private sqlCheckReviewSubject: string
    private sqlCheckReviewTutor: string
    private sqlCheckReviewBook: string
    private sqlCheckFaq: string
    private sqlCheckComment: string

    constructor() {
        this.sqlDeleteShareNote = 'DELETE FROM `sharenote` WHERE `ShareNoteID` = ?';
        this.sqlDeleteShareEvent = 'DELETE FROM `shareevent` WHERE `ShareEventID` = ?';
        this.sqlDeleteReviewSubject = 'DELETE FROM `reviewsubject` WHERE `ReviewSubjectID` = ?';
        this.sqlDeleteReviewTutor = 'DELETE FROM `reviewtutor` WHERE `ReviewTutorID` = ?';
        this.sqlDeleteReviewBook = 'DELETE FROM `reviewbook` WHERE `ReviewBookID` = ?';
        this.sqlDeleteFaq = 'DELETE FROM `faq` WHERE `FAQID` = ?';
        this.sqlDeleteComment = 'DELETE FROM `comment_detail` WHERE `CommentID` = ?';
        this.sqlDeleteOnwerShareNote = 'SELECT UserID as userId FROM `sharenote` WHERE `ShareNoteID` = ?';
        this.sqlDeleteOnwerShareEvent = 'SELECT UserID as userId FROM `shareevent` WHERE `ShareEventID` = ?';
        this.sqlDeleteOnwerReviewSubject = 'SELECT UserID as userId FROM `reviewsubject` WHERE `ReviewSubjectID` = ?';
        this.sqlDeleteOnwerReviewTutor = 'SELECT UserID as userId FROM `reviewtutor` WHERE `ReviewTutorID` = ?';
        this.sqlDeleteOnwerReviewBook = 'SELECT UserID as userId FROM `reviewbook` WHERE `ReviewBookID` = ?';
        this.sqlDeleteOnwerFaq = 'SELECT UserID as userId FROM `faq` WHERE `FAQID` = ?';
        this.sqlDeleteOnwerCommnet = 'SELECT UserID as userId FROM `comment_detail` WHERE `CommentID` = ?';
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

    getSqlOwner(postType: string) {
        if (postType === "a") {
            return this.sqlDeleteOnwerReviewBook;
        } else if (postType === "b") {
            return this.sqlDeleteOnwerReviewSubject;
        } else if (postType === "c") {
            return this.sqlDeleteOnwerReviewTutor;
        } else if (postType === "d") {
            return this.sqlDeleteOnwerShareEvent;
        } else if (postType === "e") {
            return this.sqlDeleteOnwerShareNote;
        } else if (postType === "f") {
            return this.sqlDeleteOnwerFaq;
        } else {
            throw new Error("get SQL check owner this (" + postType + ") not found | function: getSqlOwner | file name: deleteSqlRaw");
            return 0;
        }
    }

    getSqlOwnerComment() {
        return this.sqlDeleteOnwerCommnet;
    }
}