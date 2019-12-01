export default class createParser {

    parserShareNote = async (data: any, userID: string ,postID: string) => {
        return {
            ShareNoteID: postID,
            Cover: data.Cover,
            Subject_Name: data.Subject_Name,
            Section: data.Section,
            Instructor_Name: data.Instructor_Name,
            Semeter: data.Semeter,
            Title: data.Title,
            UserID: userID
        }
    }

    parserShareEvent = async (data: any, userID: string ,postID: string) => {
        return {
            ShareEventID: postID,
            Cover: data.Cover,
            Resgister: data.Resgister,
            Location: data.Location,
            Condi: data.Condi,
            Describ: data.Describ,
            Title: data.Title,
            UserID: userID
        }
    }

    parserReviewSubject = async (data: any, userID: string ,postID: string) => {
        return {
            ReviewSubjectID: postID,
            SubjectID: data.subjectId,
            SubjectName: data.subjectName,
            Instructor_Name: data.instructorName,
            Des: data.description,
            Title: data.Title,
            Section: data.section,
            UserID: userID
        }
    }

    parserReviewTutor = async (data: any, userID: string ,postID: string) => {
        return {
            ReviewTutorID: postID,
            TutorName: data.tutorName,
            Academy: data.academy,
            Subject_Teach: data.subjectTeacher,
            Des: data.description,
            ContactLink: data.contactLink,
            Title: data.title,
            UserID: userID
        }
    }

    parserReviewBook = async (data: any, userID ,postID: string) => {
        return {
            ReviewBookID: postID,
            Cover: data.cover,
            Title: data.title,
            WrittenBy: data.writtenBy,
            Edition: data.edition,
            Link: data.link,
            Des: data.description,
            BookName: data.bookName,
            UserID: userID
        }
    }

    parserFaq = async (data: any, userID: string ,postID: string) => {
        return {
            FAQID: postID,
            title: data.title,
            description: data.description,
            UserID: userID
        }
    }

    parserTagPost = async (data: any, postID: string) => {
        const tagall = new Array();
        for (let i = 0; i < data.tag.length; i++) {
            tagall.push([data.tag[i].TagDetail, postID]);
        }
            return tagall;
    }

    parserTagSchema = async (data: any) => {
        return {
            TagDetail: data[0],
            PostID: data[1]
        }
    }

    parserContentSchema = async (data: any) => {
        return {
            Picture: data[0],
            PostID: data[1]
        }
    }

    parserContent = async (data: any, postID: string) => {
        const contentAll = new Array();
        for (let i = 0; i < data.content.length; i++) {
            contentAll.push([data.content[i].Picture, postID]);
        }
        return contentAll;
    }

    parserComment = async (data: any, postID: string, userID: string) => {
        return {
            Detail: data.Detail,
            PostID: postID,
            UserID: userID
        }
    }
}