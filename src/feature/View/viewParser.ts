export default class viewParser{
    parserShareNote = (data: any, owner: boolean,contentData: Array<string>)=>{
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
            content: [],
            isOwner: owner
        }
    }
}