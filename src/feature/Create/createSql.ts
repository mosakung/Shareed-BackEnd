export default class createSql {

    private createReviewBook: string;
    private createReviewSubject: string;
    private createReviewTutor: string
    private createShareEvent: string;
    private createShareNote: string;
    private createFaq: string;
    private createContent: string;
    private createTagPost: string;
    private createComment: string;
    private getReviewBookId: string;
    private getReviewSubjectId: string;
    private getReviewTutorId: string;
    private getShareEventId: string;
    private getShareNoteId: string;
    private getFaqId: string;

    constructor() {
        this.createReviewBook = 'INSERT INTO `reviewbook`(`ReviewBookID`, `Cover`, `Title`, `WrittenBy`, `Edition`, `Link`, `Des`, `BookName`, `UserID`) VALUES (?,?,?,?,?,?,?,?,?)';
        this.createReviewSubject = 'INSERT INTO `reviewsubject`(`ReviewSubjectID`, `SubjectID`, `SubjectName`, `Instructor_Name`, `Des`, `Title`, `Section`, `UserID`) VALUES (?,?,?,?,?,?,?,?)';
        this.createReviewTutor = 'INSERT INTO `reviewtutor`(`ReviewTutorID`, `TutorName`, `Academy`, `Subject_Teach`, `Des`, `ContactLink`, `Title`, `Cover`, `UserID`) VALUES (?,?,?,?,?,?,?,?,?)';
        this.createShareEvent = 'INSERT INTO `shareevent`(`ShareEventID`, `Cover`, `Register`, `Location`, `Condi`, `Describ`, `Title`, `UserID`) VALUES (?,?,?,?,?,?,?,?)';
        this.createShareNote = 'INSERT INTO `sharenote`(`ShareNoteID`, `Cover`, `Subject_Name`, `Section`, `Instructor_Name`, `Semeter`, `Title`, `UserID`) VALUES (?,?,?,?,?,?,?,?)';
        this.createFaq = 'INSERT INTO `faq`(`FAQID`, `title`, `description`, `UserID`) VALUES (?,?,?,?)';
        this.createContent = 'INSERT INTO `picture`(`Picture`, `PostID`) VALUES (?)';
        this.createTagPost = 'INSERT INTO `tagpost`(`TagDetail`, `PostID`) VALUES (?)';
        this.createComment = 'INSERT INTO `comment_detail`(`Detail`, `PostID`, `UserID`) VALUES (?,?,?)';
        this.getReviewBookId = 'SELECT ReviewBookID FROM `reviewbook` ORDER By ReviewBookID DESC LIMIT 1';
        this.getReviewSubjectId = 'SELECT ReviewSubjectID FROM `reviewsubject` ORDER By ReviewSubjectID DESC LIMIT 1';
        this.getReviewTutorId = 'SELECT ReviewTutorID FROM `reviewtutor` ORDER By ShareEventID DESC LIMIT 1';
        this.getShareEventId = 'SELECT ShareEventID FROM `shareevent` ORDER By ShareEventID DESC LIMIT 1';
        this.getShareNoteId = 'SELECT ShareNoteID FROM `sharenote` ORDER By ShareNoteID DESC LIMIT 1';
        this.getFaqId = 'SELECT FAQID FROM `faq` ORDER By FAQID DESC LIMIT 1';
    }

    createPost = (typePost: string) => {
        if (typePost === "a") { return this.createReviewBook; }
        else if (typePost === "b") { return this.createReviewSubject; }
        else if (typePost === "c") { return this.createReviewTutor; }
        else if (typePost === "d") { return this.createShareEvent; }
        else if (typePost === "e") { return this.createShareNote; }
        else if (typePost === "f") { return this.createFaq; }
        else throw ("error PostType");
    }

    createContentPicture = () => { return this.createContent; }

    createTag = () => { return this.createTagPost; }

    createCommnentPost = () => { return this.createComment; }

    getRecentlyPostId = (typePost: string) => {
        if (typePost === "a") { return this.getReviewBookId; }
        else if (typePost === "b") { return this.getReviewSubjectId; }
        else if (typePost === "c") { return this.getReviewTutorId; }
        else if (typePost === "d") { return this.getShareEventId; }
        else if (typePost === "e") { return this.getShareNoteId; }
        else if (typePost === "f") { return this.getFaqId; }
        else throw ("error PostType");
    }
}