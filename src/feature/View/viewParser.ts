export default class viewParser {

    parserShareNote = async (data: any, owner: boolean, contentData: any, tagPost ,comment) : Promise<Object> => {
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
            content: contentData,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserShareEvent = async (data: any, owner: boolean, contentData: any, tagPost,comment) : Promise<Object> =>{
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
            content: contentData,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserReviewSubject = async (data: any, owner: boolean, contentData: any, tagPost,comment) : Promise<Object> =>{
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
            content: contentData,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserReviewTutor = async (data: any, owner: boolean, contentData: any, tagPost,comment) : Promise<Object> =>{
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
            contect: contentData,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserReviewBook = async (data: any, owner: boolean, contentData: any, tagPost,comment) : Promise<Object> => {
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
            content: contentData,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserFaq = async (data: any, owner: boolean, tagPost,comment): Promise<object> => {
        return{
            faqId: data[0].FAQID,
            title: data[0].title,
            description: data[0].description,
            userId: data[0].UserID,
            dateTime: data[0].date_Time,
            tag: tagPost,
            comment: comment,
            isOwner: owner
        }
    }

    parserPostAll = async (data:any , page: number) : Promise<Object> => {
        return {
            data: data,
            pageAll: Math.ceil(page[0].countId/5)
        }
    }

    
}