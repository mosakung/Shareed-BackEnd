export default class EditPaser {

    constructor() { }

    async split(newBody: object, require: string): Promise<object> {
        try {
            if (require === 'sharenote') {
                return {
                    Cover: (<any>newBody).Cover,
                    Subject_Name: (<any>newBody).Subject_Name,
                    Section: (<any>newBody).Section,
                    Instructor_Name: (<any>newBody).Instructor_Name,
                    Semeter: (<any>newBody).Semeter,
                    Title: (<any>newBody).Title
                }
            } else if (require === 'shareevent') {
                return {
                    Cover: (<any>newBody).Cover,
                    Resgister: (<any>newBody).Resgister,
                    Location: (<any>newBody).Location,
                    Condi: (<any>newBody).Condi,
                    Describ: (<any>newBody).Describ,
                    Title: (<any>newBody).Title
                }
            } else if (require === 'reviewsubject') {
                return {
                    SubjectID: (<any>newBody).SubjectID,
                    SubjectName: (<any>newBody).Subject_Name,
                    Instructor_Name: (<any>newBody).Instructor_Name,
                    Des: (<any>newBody).Des,
                    Title: (<any>newBody).Title,
                    Section: (<any>newBody).Section
                }
            } else if (require === 'reviewtutor') {
                return {
                    TutorName: (<any>newBody).TutorName,
                    Academy: (<any>newBody).Academy,
                    Subject_Teach: (<any>newBody).Subject_Teach,
                    Des: (<any>newBody).Des,
                    ContactLink: (<any>newBody).ContactLink,
                    Title: (<any>newBody).Title
                }
            }
            else if (require === 'reviewbook') {
                return {
                    Cover: (<any>newBody).Cover,
                    Title: (<any>newBody).Title,
                    WrittenBy: (<any>newBody).WrittenBy,
                    Edition: (<any>newBody).Edition,
                    Link: (<any>newBody).Link,
                    Des: (<any>newBody).Des,
                    BookName: (<any>newBody).BookName
                }
            } else if (require === 'faq') {
                return {
                    title: (<any>newBody).title,
                    description: (<any>newBody).description
                }
            } else if (require === 'comment') {
                return {
                    Detail: (<any>newBody).Detail
                }
            } else if (require === 'tag') {
                let objectArray: Array<object> = [];
                let tag: Array<object> = (<any>newBody).tag;

                for (let i: number = 0; i < Object.keys(tag).length; i++) {
                    objectArray.push({
                        TagDetail: (<any>tag[i]).TagDetail
                    });
                }
                return objectArray;
            } else if (require === 'picture') {
                let objectArray: Array<object> = [];
                let picture: Array<object> = (<any>newBody).content;

                for (let i: number = 0; i < Object.keys(picture).length; i++) {
                    objectArray.push({
                        TagDetail: (<any>picture[i]).Picture
                    });
                }
                return objectArray;
            } else {
                throw new Error('require split not found this mode | EditPaser');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
}