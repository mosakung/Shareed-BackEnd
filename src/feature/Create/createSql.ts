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

    constructor() {
        this.createReviewBook = '';
        this.createReviewSubject = '';
        this.createReviewTutor = '';
        this.createShareEvent = '';
        this.createShareNote = '';
        this.createFaq = '';
        this.createContent = '';
        this.createTagPost = '';
        this.createComment = '';
        this.createTagPost = '';
        this.createComment = '';
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

    createCommnentPost = () =>{ return this.createComment; }
}