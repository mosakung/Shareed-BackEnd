export default class createParser {

    parserShareNote = (data: Object, userID: string) => {
        return {
            shareNoteId: data[0].shareNoteId,
            cover: data[0].cover,
            subjectName: data[0].subjectName,
            section: data[0].section,
            instructorName: data[0].instructorName,
            semeter: data[0].semeter,
            title: data[0].title,
            userId: userID
        }
    }

    parserShareEvent = (data: Object, userID: string) => {
        return {
            shareEventId: data[0].shareEventId,
            cover: data[0].cover,
            register: data[0].register,
            location: data[0].location,
            condition: data[0].condition,
            describe: data[0].describe,
            title: data[0].title,
            userId: userID
        }
    }

    parserReviewSubject = (data: Object, userID: string) => {
        return {
            reviewSubjectId: data[0].reviewSubjectId,
            subjectId: data[0].subjectId,
            subjectName: data[0].subjectName,
            instructorName: data[0].instructorName,
            description: data[0].description,
            title: data[0].title,
            section: data[0].section,
            userId: userID
        }
    }

    parserReviewTutor = (data: Object, userID: string) => {
        return {
            reviewTutorId: data[0].reviewTutorId,
            tutorName: data[0].tutorName,
            academy: data[0].academy,
            subjectTeacher: data[0].subjectTeacher,
            description: data[0].description,
            contact: data[0].contactLink,
            title: data[0].title,
            userId: userID
        }
    }

    parserReviewBook = (data: Object, userID) => {
        return {
            reviewBookId: data[0].reviewBookId,
            cover: data[0].cover,
            title: data[0].title,
            writtenBy: data[0].writtenBy,
            edition: data[0].edition,
            link: data[0].link,
            description: data[0].description,
            bookName: data[0].bookName,
            userId: userID
        }
    }

    parserFaq = (data: Object, userID: string) => {
        return {
            faqId: data[0].faqId,
            title: data[0].title,
            description: data[0].description,
            userId: userID
        }
    }

    parserTagPost = (data: any, postId: string) => {
        const tagall = new Array();
        for (let i = 0; i < data.tag.length; i++) {
            tagall.push([data.tag[i].TagDetail, postId]);
        }
        return tagall;
    }

    parserContent = (data: any, postId: string) => {
        const contentAll = new Array();
        for (let i = 0; i < data.content.length; i++) {
            contentAll.push([data.content[i].Picture, postId]);
        }
        return contentAll;
    }

    parserComment = (data: any, postId: string, userID: string) => {
        return {
            details: data.Detail,
            postId: postId,
            userId: userID
        }
    }
}