export default class viewParser{

    parserShareNote = (data: any, owner: boolean,contentData)=>{
        var contentAll = new Array();
        for(var i = 0; i< Object.keys(contentData).length;i++){
            contentAll.push(contentData[i]);
        }
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
            content: [contentAll],
            isOwner: owner
        }
    }

    parserReviewBook = (data , owner , contentData)=>{
        /*var contentAll = new Array();
        for(var i = 0; i< Object.keys(contentData).length;i++){
            contentAll.push(contentData[i]);
        }*/
        return{
            test: data[0].UserID,
            content: contentData
        }
    }
}