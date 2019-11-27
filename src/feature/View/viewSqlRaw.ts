export default class viewSqlRaw {
    private getAllReviewBook: string;
    private getAllReviewSubject: string;
    private getAllReviewTutor: string;
    private getAllShareEvent: string
    private getAllShareNote: string;
    private getAllFaq: string;
    private getReviewBook: string;
    private getReviewSubject: string;
    private getReviewTutor: string
    private getShareEvent: string;
    private getShareNote: string;
    private getFaq: string;
    private getContent: string;
    private getTagPost: string;
    private getComment: string;
    private countPost: string;



    constructor() {
        this.getAllReviewBook = "select ReviewBookID,Cover,Title,date_time from `reviewbook` ORDER BY ReviewBookID LIMIT ?,?";
        this.getAllReviewSubject = "select ReviewSubjectID,SubjectID,Title,Date_Time from `reviewsubject` ORDER BY ReviewSubjectID LIMIT ?,?";
        this.getAllReviewTutor = "select ReviewTutorID,Cover,Title,date_time from `reviewtutor` ORDER BY ReviewTutorID LIMIT ?,?";
        this.getAllShareEvent = "select ShareEventID,Cover,Title,Data_Time from `shareevent` ORDER BY ShareEventID LIMIT ?,?";
        this.getAllShareNote = "select ShareNoteID,Cover,Subject_Name,Date_Time from `sharenote` ORDER BY ShareNoteID LIMIT ?,?";
        this.getAllFaq = "select FAQID,title,description,date_time from `faq` ORDER BY FAQID LIMIT ?,?"
        this.getReviewBook = "select * from `reviewbook` where ReviewBookID = ?";
        this.getReviewSubject = "select * from `reviewsubject` where ReviewSubjectID = ?";
        this.getReviewTutor = "select * from `reviewtutor` where ReviewtutorID = ?";
        this.getShareEvent = "select * from `shareevent` where ShareEventID = ?";
        this.getShareNote = "select * from `sharenote` where ShareNoteID = ?";
        this.getFaq = "select * from `faq` where FAQID = ?";
        this.getContent = "SELECT * FROM `picture` WHERE PostID = ?";
        this.getTagPost = "select * from `tagpost` where PostID = ?";
        this.countPost = "select COUNT(*) as countId from ";
        this.getComment = "select * from `comment_detail` where PostID = ?";
    }

    getAllQueryPost = (typePost: string) => {
        if (typePost === "a") {
            return this.getAllReviewBook;
        } else if (typePost === "b") {
            return this.getAllReviewSubject;
        } else if (typePost === "c") {
            return this.getAllReviewTutor;
        } else if (typePost === "d") {
            return this.getAllShareEvent;
        } else if (typePost === "e") {
            return this.getAllShareNote;
        } else if (typePost === "f") {
            return this.getAllFaq;
        }
        else throw("error PostType");
    }

    getQueryPost =(typePost: string):string => {
        if (typePost === "a") {
            return this.getReviewBook;
        } else if (typePost === "b") {
            return this.getReviewSubject;
        } else if (typePost === "c") {
            return this.getReviewTutor;
        } else if (typePost === "d") {
            return this.getShareEvent;
        } else if (typePost === "e") {
            return this.getShareNote;
        } else if (typePost === "f") {
            return this.getFaq;
        }
        else throw("error PostType");
    }

    getPostContent = ()=>{ return this.getContent; }

    getPostTag = ()=> { return this.getTagPost;}

    getPostComment = ()=> { return this.getComment; }

    getCountPost = ()=> {return this.countPost; }

    
    
}