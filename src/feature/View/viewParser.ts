export default class viewParser {

    getcontent = (contentData: any) => {
        var contentAll = new Array();
        for (var i = 0; i < Object.keys(contentData).length; i++) {
            contentAll.push(contentData[i]);
        }
        return contentAll;
    }

    parserShareNote = (data: any, owner: boolean, contentData: any) => {
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
            content: this.getcontent(contentData),
            isOwner: owner
        }
    }

    parserShareEvent = (data: any, owner: boolean, contentData: any)=>{
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
            content: this.getcontent(contentData),
            isOwner: owner
        }
    }

    parserReviewSubject = (data: any, owner: boolean, contentData: any)=>{
        return {

        }
    }

    parserReviewTutor = (data: any, owner: boolean, contentData: any)=>{
        return {

        }
    }

    parserReviewBook = (data: any, owner: boolean, contentData: any) => {
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
            content: this.getcontent(contentData),
            isOwner: owner
        }
    }

    
}