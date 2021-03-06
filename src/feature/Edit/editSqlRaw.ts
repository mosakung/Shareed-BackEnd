import { type } from "os";

export default class SqlEdit {
    private sqlEditShareNote: string;
    private sqlEditShareEvent: string;
    private sqlEditReviewSubject: string;
    private sqlEditReviewTutor: string;
    private sqlEditReviewBook: string;
    private sqlEditFaq: string;
    private sqlEditComment: string;
    private sqlEditOnwerShareNote: string;
    private sqlEditOnwerShareEvent: string;
    private sqlEditOnwerReviewSubject: string;
    private sqlEditOnwerReviewTutor: string;
    private sqlEditOnwerReviewBook: string;
    private sqlEditOnwerFaq: string;
    private sqlEditOnwerCommnet: string;
    private sqlFetchPicture: string;
    private sqlCreatePicture: string;
    private sqlEditPicture: string;
    private sqlDeletePicture: string;
    private sqlFetchTag: string;
    private sqlCreateTag: string;
    private sqlEditTag: string;
    private sqlDeleteTag: string;

    constructor() {
        this.sqlEditShareNote = 'UPDATE `sharenote` SET `Cover` = ?, `Subject_Name` = ?, `Section` = ?, `Instructor_Name` = ?, `Semeter` = ?, `Title` = ? WHERE `ShareNoteID` = ?';
        this.sqlEditShareEvent = 'UPDATE `shareevent` SET `Cover` = ?, `Register` =?, `Location` = ?, `Condi` = ?, `Describ` = ?, `Title` = ? WHERE `ShareEventID` = ?';
        this.sqlEditReviewSubject = 'UPDATE `reviewsubject` SET `SubjectID` = ?, `SubjectName` = ?, `Instructor_Name` = ?, `Des` = ?, `Title` = ?, `Section` = ? WHERE `ReviewSubjectID` = ?';
        this.sqlEditReviewTutor = 'UPDATE `reviewtutor` SET `TutorName` = ?, `Academy` = ?, `Subject_Teach` = ?, `Des` = ?, `ContactLink` = ?, `Title` = ? WHERE `ReviewTutorID` = ?';
        this.sqlEditReviewBook = 'UPDATE `reviewbook` SET `Cover` = ?, `Title` = ?, `WrittenBy` = ?, `Edition` = ?, `Link` = ?, `Des` = ?, `BookName` = ? WHERE `ReviewBookID` = ?';
        this.sqlEditFaq = 'UPDATE `faq` SET `title` = ?, `description` = ? WHERE `FAQID` = ?';
        this.sqlEditComment = 'UPDATE `comment_detail` SET `Detail` = ? WHERE `CommentID` = ?';
        this.sqlEditOnwerShareNote = 'SELECT UserID as userId FROM `sharenote` WHERE `ShareNoteID` = ?';
        this.sqlEditOnwerShareEvent = 'SELECT UserID as userId FROM `shareevent` WHERE `ShareEventID` = ?';
        this.sqlEditOnwerReviewSubject = 'SELECT UserID as userId FROM `reviewsubject` WHERE `ReviewSubjectID` = ?';
        this.sqlEditOnwerReviewTutor = 'SELECT UserID as userId FROM `reviewtutor` WHERE `ReviewTutorID` = ?';
        this.sqlEditOnwerReviewBook = 'SELECT UserID as userId FROM `reviewbook` WHERE `ReviewBookID` = ?';
        this.sqlEditOnwerFaq = 'SELECT UserID as userId FROM `faq` WHERE `FAQID` = ?';
        this.sqlEditOnwerCommnet = 'SELECT `UserID` as userId FROM `comment_detail` WHERE `CommentID` = ?';
        this.sqlFetchPicture = 'SELECT `Picture` as picture, `PictureID` as id FROM `picture` WHERE `PostID` = ?';
        this.sqlCreatePicture = 'INSERT INTO `picture`(`Picture`, `PostID`) VALUES (?,?)';
        this.sqlEditPicture = 'UPDATE `picture` SET `Picture` = ? WHERE `PictureID` = ?';
        this.sqlDeletePicture = 'DELETE FROM `picture` WHERE `PictureID` = ?';
        this.sqlFetchTag = 'SELECT `TagID`, `TagDetail` FROM `tagpost` WHERE `PostID` = ?';
        this.sqlCreateTag = 'INSERT INTO `tagpost`(`TagDetail`, `PostID`) VALUE (?,?)';
        this.sqlEditTag = 'UPDATE `tagpost` SET `TagDetail` = ? WHERE `TagID` = ?';
        this.sqlDeleteTag = 'DELETE FROM `tagpost` WHERE `TagID` = ?';
    }

    getSqlEdit(postType: string) {
        if (postType === "a") return this.sqlEditReviewBook;
        else if (postType === "b") return this.sqlEditReviewSubject;
        else if (postType === "c") return this.sqlEditReviewTutor;
        else if (postType === "d") return this.sqlEditShareEvent;
        else if (postType === "e") return this.sqlEditShareNote;
        else if (postType === "f") return this.sqlEditFaq;
        else throw new Error("post type not found (" + postType + ") | function: getSqlEdit | file name: editSqlRaw");
    }

    getSqlComment() {
        return this.sqlEditComment;
    }

    getSqlOwner(postType: string) {
        if (postType === "a") return this.sqlEditOnwerReviewBook;
        else if (postType === "b") return this.sqlEditOnwerReviewSubject;
        else if (postType === "c") return this.sqlEditOnwerReviewTutor;
        else if (postType === "d") return this.sqlEditOnwerShareEvent;
        else if (postType === "e") return this.sqlEditOnwerShareNote;
        else if (postType === "f") return this.sqlEditOnwerFaq;
        else throw new Error("post type not found (" + postType + ") | function: getSqlOwner | file name: editSqlRaw");
    }

    getSqlOwnerComment() : string {
        return this.sqlEditOnwerCommnet;
    }

    getSqlPicture(typeMode: string) {
        if (typeMode === 'fetch') return this.sqlFetchPicture;
        else if (typeMode === 'create') return this.sqlCreatePicture;
        else if (typeMode === 'edit') return this.sqlEditPicture;
        else if (typeMode === 'delete') return this.sqlDeletePicture;
        else throw new Error('mode not found (' + typeMode + ') | function: getSqlPicture | file name: editSqlRaw');
    }

    getSqlTag(typeMode: string) {
        if (typeMode === 'fetch') return this.sqlFetchTag;
        else if (typeMode === 'create') return this.sqlCreateTag;
        else if (typeMode === 'edit') return this.sqlEditTag;
        else if (typeMode === 'delete') return this.sqlDeleteTag;
        else throw new Error('mode not found (' + typeMode + ') | function: getSqlTag | file name: editSqlRaw');
    }
}