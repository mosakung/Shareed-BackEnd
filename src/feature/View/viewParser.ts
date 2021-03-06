export default class viewParser {

    parserShareNote = async (data: any, owner: boolean, contentData: any, tagPost, comment, countComment): Promise<Object> => {
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
            Username: data[0].Username,
            content: contentData,
            tag: tagPost,
            comment: comment,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserShareEvent = async (data: any, owner: boolean, contentData: any, tagPost, comment, countComment): Promise<Object> => {
        return {
            shareEventId: data[0].ShareEventID,
            cover: data[0].Cover,
            register: data[0].Register,
            location: data[0].Location,
            condition: data[0].Condi,
            describe: data[0].Describ,
            title: data[0].Title,
            userId: data[0].UserID,
            dateTime: data[0].Data_Time,
            Username: data[0].Username,
            content: contentData,
            tag: tagPost,
            comment: comment,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserReviewSubject = async (data: any, owner: boolean, contentData: any, tagPost, comment, countComment): Promise<Object> => {
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
            Username: data[0].Username,
            content: contentData,
            tag: tagPost,
            comment: comment,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserReviewTutor = async (data: any, owner: boolean, contentData: any, tagPost, comment, countComment): Promise<Object> => {
        return {
            reviewTutorId: data[0].ReviewTutorID,
            tutorName: data[0].TutorName,
            academy: data[0].Academy,
            subjectTeacher: data[0].Subject_Teach,
            description: data[0].Des,
            contact: data[0].ContactLink,
            title: data[0].Title,
            cover: data[0].Cover,
            userId: data[0].UserID,
            dateTime: data[0].Date_Time,
            Username: data[0].Username,
            contect: contentData,
            tag: tagPost,
            comment: comment,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserReviewBook = async (data: any, owner: boolean, contentData: any, tagPost, comment, countComment): Promise<Object> => {
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
            Username: data[0].Username,
            content: contentData,
            tag: tagPost,
            comment: comment,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserFaq = async (data: any, owner: boolean, tagPost, comment, countComment, content): Promise<object> => {
        return {
            faqId: data[0].FAQID,
            title: data[0].title,
            description: data[0].description,
            userId: data[0].UserID,
            dateTime: data[0].date_Time,
            Username: data[0].Username,
            tag: tagPost,
            comment: comment,
            content: content,
            countComment: countComment[0].count,
            isOwner: owner
        }
    }

    parserPostAll = async (data: any, page: number, tagAll: any): Promise<Object> => {
        return {
            data: data,
            pageAll: Math.ceil(page[0].countId / 5),
            tag: tagAll
        }
    }

    parserRecentlyPost = async (reviewBook: any, reviewSubject: any, reviewTutor: any, shareEvent: any, shareNote: any, faq: any) => {
        return {
            reviewBook: reviewBook,
            reviewSubject: reviewSubject,
            reviewTutor: reviewTutor,
            shareEvent: shareEvent,
            shareNote: shareNote,
            faq: faq
        }
    }


}