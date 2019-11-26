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
        this.createReviewBook = '';
        this.createReviewSubject = '';
        this.createReviewTutor = '';
        this.createShareEvent = '';
        this.createShareNote = 'INSERT INTO `sharenote`(`ShareNoteID`, `Cover`, `Subject_Name`, `Section`, `Instructor_Name`, `Semeter`, `Title`, `UserID`) VALUES (?,?,?,?,?,?,?,?)';
        this.createFaq = '';
        this.createContent = '';
        this.createTagPost = '';
        this.createComment = '';
        this.createTagPost = '';
        this.createComment = '';
        this.getReviewBookId = 'SELECT ReviewBookID FROM `reviewbook` ORDER By ReviewBookID DESC LIMIT 1';
        this.getReviewSubjectId = '';
        this.getReviewTutorId = '';
        this.getShareEventId = '';
        this.getShareNoteId = '';
        this.getFaqId = '';
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