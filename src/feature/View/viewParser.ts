export default class viewParser {

    getContent = (contentData: any) => {
        var contentAll = new Array();
        for (var i = 0; i < Object.keys(contentData).length; i++) {
            contentAll.push(contentData[i]);
        }
        return contentAll;
    }

    getTag = (tagPost: object) =>{
        var tagAll = new Array();
        for( var i = 0 ; i < Object.keys(tagPost).length; i++){
            tagAll.push(tagPost[i]);
        }
        return tagAll;
    }

    getComment = (comment: object) =>{
        var commentAll = new Array();
        for( var i = 0 ; i < Object.keys(comment).length; i++){
            commentAll.push(comment[i]);
        }
        return commentAll;
    }

    parserShareNote = (data: any, owner: boolean, contentData: any, tagPost ,comment) => {
        return {
            shareNoteId: data[0].shareNoteID,
            cover: data[0].Cover,
            subjectName: data[0].Subject_Name,
            section: data[0].Section,
            instructorName: data[0].Instructor_Name,
            semeter: data[0].Semeter,
            title: data[0].Title,
            userId: data[0].UserID,
            dateTime: data[0].Date_Time,
            content: this.getContent(contentData),
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserShareEvent = (data: any, owner: boolean, contentData: any, tagPost,comment)=>{
        return {
            shareEventId: data[0].ShareEventID,
            cover: data[0].Cover,
            register: data[0].Register,
            location: data[0].Location,
            condition: data[0].Condi,
            describe: data[0].Describ,
            title: data[0].Title,
            userId: data[0].UserID,
            dateTime: data[0].Date_Time,
            content: this.getContent(contentData),
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserReviewSubject = (data: any, owner: boolean, contentData: any, tagPost,comment)=>{
        return {
            reviewSubjectId: data[0].ReviewSubjectID,
            subjectId: data[0].SubjectID,
            subjectName: data[0].SubjectName,
            instructorName: data[0].Instructor_Name,
            description: data[0].Des,
            title: data[0].Title,
            section: data[0].Section,
            userId: data[0].UserID,
            dateTime: data[0].Date_Time,
            content: this.getContent(contentData),
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserReviewTutor = (data: any, owner: boolean, contentData: any, tagPost,comment)=>{
        return {
            reviewTutorId: data[0].ReviewTutorID,
            tutorName: data[0].TutorName,
            academy: data[0].Academy,
            subjectTeacher: data[0].Subject_Teach,
            description: data[0].Des,
            contact: data[0].ContactLink,
            title: data[0].Title,
            userId: data[0].UserID,
            dateTime: data[0].Date_Time,
            contect: this.getContent(contentData),
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserReviewBook = (data: any, owner: boolean, contentData: any, tagPost,comment) => {
        return {
            reviewBookId: data[0].ReviewBookID,
            cover: data[0].Cover,
            title: data[0].Title,
            writtenBy: data[0].WrittenBy,
            edition: data[0].Edition,
            link: data[0].Link,
            description: data[0].Des,
            bookName: data[0].BookName,
            userId: data[0].UserID,
            dateTime: data[0].date_time,
            content: this.getContent(contentData),
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserFaq = (data: any, owner: boolean, tagPost,comment)=> {
        return{
            faqId: data[0].FAQID,
            title: data[0].title,
            description: data[0].description,
            userId: data[0].UserID,
            dateTime: data[0].date_Time,
            tag: this.getTag(tagPost),
            comment: this.getComment(comment),
            isOwner: owner
        }
    }

    parserPostAll = (data:any , page: number) : object => {
        return {
            data: data,
            pageAll: Math.ceil(page[0].countId/5)
        }
    }

    
}