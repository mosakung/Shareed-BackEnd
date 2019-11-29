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
    private getRecenlyReviewBook: string;
    private getRecenlyReviewSubject: string;
    private getRecenlyReviewTutor: string;
    private getRecenlyShareEvent: string
    private getRecenlyShareNote: string;
    private getRecenlyFaq: string;



    constructor() {
        this.getAllReviewBook = "select ReviewBookID,Cover,Title,date_time, u.Username from reviewbook r ,uesr u  where r.UserID = u.UserID ORDER BY ReviewBookID LIMIT ?,?";
        this.getAllReviewSubject = "select ReviewSubjectID,SubjectID,Title,Date_Time, u.Username from reviewsubject r, user u  where r.UserID = u.UserID ORDER BY ReviewSubjectID LIMIT ?,?";
        this.getAllReviewTutor = "select ReviewTutorID,Cover,Title,date_time, u.Username from reviewtutor r ,user u where f.UserID = u.UserID ORDER BY ReviewTutorID LIMIT ?,?";
        this.getAllShareEvent = "select ShareEventID,Cover,Title,Data_Time, u.Username from shareevent e , user u  where e.UserID = u.UserID ORDER BY ShareEventID LIMIT ?,?";
        this.getAllShareNote = "select ShareNoteID,Cover,Subject_Name,Date_Time,Title, u.Username from sharenote s , user u where s.UserID = u.UserID ORDER BY ShareNoteID LIMIT ?,?";
        this.getAllFaq = "select FAQID,title,description,date_time, u.Username from faq f , user u where f.UserID = u.UserID ORDER BY FAQID LIMIT ?,?"
        this.getReviewBook = "select r.*, u.Username from reviewbook r, user u where r.UserID = u.UserID AND ReviewBookID = ? ";
        this.getReviewSubject = "select r.*, u.Username from reviewsubject r, user u where r.UserID = u.UserID AND ReviewSubjectID = ?";
        this.getReviewTutor = "select r.*, u.Username from reviewtutor r ,user u where r.UserID = u.UserID AND ReviewtutorID = ?";
        this.getShareEvent = "select r.*, u.Username from shareevent s ,user u where s.UserID = u.UserID AND ShareEventID = ?";
        this.getShareNote = "select r.*, u.Username from sharenote s, user u where s.UserID = u.UserID AND ShareNoteID = ?";
        this.getFaq = "select f.*,u.Username from faq f where f.UserID = u.UserID AND FAQID = ?";
        this.getContent = "SELECT * FROM `picture` WHERE PostID = ?";
        this.getTagPost = "select * from `tagpost` where PostID = ?";
        this.countPost = "select COUNT(*) as countId from ";
        this.getComment = "select * from `comment_detail` where PostID = ?";
        this.getRecenlyReviewBook = "select ReviewBookID,Cover,Title,date_time, u.Username from reviewbook r ,user u  where r.UserID = u.UserID and r.UserID = ? ORDER BY date_time LIMIT 0,2";
        this.getRecenlyReviewSubject = "select ReviewSubjectID,SubjectID,Title,Date_Time, u.Username from reviewsubject r, user u  where r.UserID = u.UserID and r.UserID = ? ORDER BY date_time LIMIT 0,2";
        this.getRecenlyReviewTutor = "select ReviewTutorID,Cover,Title,date_time, u.Username from reviewtutor r ,user u where r.UserID = u.UserID and r.UserID = ? ORDER BY date_time LIMIT 0,2";
        this.getRecenlyShareEvent = "select ShareEventID,Cover,Title,Data_Time, u.Username from shareevent e , user u  where e.UserID = u.UserID and e.UserID = ? ORDER BY Data_Time LIMIT 0,2";
        this.getRecenlyShareNote = "select ShareNoteID,Cover,Subject_Name,Date_Time,Title, u.Username from sharenote s , user u where s.UserID = u.UserID  and s.UserID = ? ORDER BY Date_Time LIMIT 0,2";
        this.getRecenlyFaq = "select FAQID,title,description,date_time, u.Username from faq f , user u where f.UserID = u.UserID and f.UserID = ? ORDER BY date_time LIMIT 0,2"

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
        else throw ("error PostType");
    }

    getQueryPost = (typePost: string): string => {
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
        else throw ("error PostType");
    }

    getRecentlyQueryPost = (typePost: string) => {
        if (typePost === "a") {
            return this.getRecenlyReviewBook;
        } else if (typePost === "b") {
            return this.getRecenlyReviewSubject;
        } else if (typePost === "c") {
            return this.getRecenlyReviewTutor;
        } else if (typePost === "d") {
            return this.getRecenlyShareEvent;
        } else if (typePost === "e") {
            return this.getRecenlyShareNote;
        } else if (typePost === "f") {
            return this.getRecenlyFaq;
        }
        else throw ("error PostType");
    }

    getPostContent = () => { return this.getContent; }

    getPostTag = () => { return this.getTagPost; }

    getPostComment = () => { return this.getComment; }

    getCountPost = () => { return this.countPost; }



}