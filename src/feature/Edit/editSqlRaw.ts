export default class SqlEdit {
    private sqlEditShareNote: string;
    private sqlEditShareEvent: string;
    private sqlEditReviewSubject: string;
    private sqlEditReviewTutor: string;
    private sqlEditReviewBook: string;
    private sqlEditFaq: string;
    private sqlEditComment: string;
    private sqlEditOnwerShareNote: string
    private sqlEditOnwerShareEvent: string
    private sqlEditOnwerReviewSubject: string
    private sqlEditOnwerReviewTutor: string
    private sqlEditOnwerReviewBook: string
    private sqlEditOnwerFaq: string
    private sqlEditOnwerCommnet: string

    constructor() {
        this.sqlEditShareNote = 'UPDATE `sharenote` SET `Cover` = ?, `Subject_Name` = ?, `Section` = ?, `Instructor_Name` = ?, `Semeter` = ?, `Title` = ?, `Date_Time` = ? WHERE `ShareNoteID` = ?';
        this.sqlEditShareEvent = 'UPDATE `shareevent` SET `Cover` = ?, `Register` =?, `Location` = ?, `Condi` = ?, `Describ` = ?, `Title` = ?, `Date_Time` = ? WHERE `ShareEventID` = ?';
        this.sqlEditReviewSubject = 'UPDATE `reviewsubject` SET `SubjectID` = ?, `SubjectName` = ?, `Instructor_Name` = ?, `Des` = ?, `Title` = ?, `Section` = ?, `Date_Time` = ? WHERE `ReviewSubjectID` = ?';
        this.sqlEditReviewTutor = 'UPDATE `reviewtutor` SET `TutorName` = ?, `Academy` = ?, `Subject_Teach` = ?, `Des` = ?, `ContactLink` = ?, `Title` = ?, `Date_Time` = ? WHERE `ReviewTutor` = ?';
        this.sqlEditReviewBook = 'UPDATE `reviewbook` SET `Cover` = ?, `Title` = ?, `WrittenBy` = ?, `Edition` = ?, `Link` = ?, `Des` = ?, `BookName` = ?, `date_time` = ? WHERE `ReviewBook` = ?';
        this.sqlEditFaq = 'UPDATE `faq` SET `title` = ?, `description` = ?, `date_time` = ? WHERE `FAQID` = ?';
        this.sqlEditComment = 'UPDATE `comment_detail` SET `Detail` = ?, `Date_Time` = ? WHERE `CommentID` = ?';
        this.sqlEditOnwerShareNote = 'SELECT UserID as userId FROM `sharenote` WHERE `ShareNoteID` = ?';
        this.sqlEditOnwerShareEvent = 'SELECT UserID as userId FROM `shareevent` WHERE `ShareEventID` = ?';
        this.sqlEditOnwerReviewSubject = 'SELECT UserID as userId FROM `reviewsubject` WHERE `ReviewSubjectID` = ?';
        this.sqlEditOnwerReviewTutor = 'SELECT UserID as userId FROM `reviewtutor` WHERE `ReviewTutorID` = ?';
        this.sqlEditOnwerReviewBook = 'SELECT UserID as userId FROM `reviewbook` WHERE `ReviewBookID` = ?';
        this.sqlEditOnwerFaq = 'SELECT UserID as userId FROM `faq` WHERE `FAQID` = ?';
        this.sqlEditOnwerCommnet = '';
    }

    getSqlEdit(postType: string) {
        if (postType === "a") {
            return this.sqlEditReviewBook;
        } else if (postType === "b") {
            return this.sqlEditReviewSubject;
        } else if (postType === "c") {
            return this.sqlEditReviewTutor;
        } else if (postType === "d") {
            return this.sqlEditShareEvent;
        } else if (postType === "e") {
            return this.sqlEditShareNote;
        } else if (postType === "f") {
            return this.sqlEditFaq;
        } else {
            throw ("SQL error post not found owner ID");
        }
    }

    getSqlComment() {
        return this.sqlEditComment;
    }

    getSqlOwner(postType: string) {
        if (postType === "a") {
            return this.sqlEditOnwerReviewBook;
        } else if (postType === "b") {
            return this.sqlEditOnwerReviewSubject;
        } else if (postType === "c") {
            return this.sqlEditOnwerReviewTutor;
        } else if (postType === "d") {
            return this.sqlEditOnwerShareEvent;
        } else if (postType === "e") {
            return this.sqlEditOnwerShareNote;
        } else if (postType === "f") {
            return this.sqlEditOnwerFaq;
        } else {
            throw ("SQL error post not found owner ID");
        }
    }

    getSqlOwnerComment() {
        return this.sqlEditOnwerCommnet;
    }
}