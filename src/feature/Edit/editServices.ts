import EditRepository from './editRepository';
import EditPaser from './editParser';
import Validation from '../../../joi/validation';

export default class EditService {
    private repo: EditRepository;
    private paser: EditPaser;
    private joi: Validation;

    constructor(repo: EditRepository, paser: EditPaser, joi: Validation) {
        this.repo = repo;
        this.paser = paser;
        this.joi = joi;
    }

    comparePicture = async(originalPicture: Object, newPicture: Object, postId: string) => {
        try {
            let lengthOriginal: number = Object.keys(originalPicture).length;
            let lengthNew: number = Object.keys(newPicture).length;

            if (lengthOriginal > lengthNew) {
                for (let i: number = 0; i < lengthNew; i++) {
                    if ((<any>originalPicture[i]).picture != (<any>newPicture[i]).Picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).Picture);
                    }
                }
                for (let i: number = lengthNew; i < lengthOriginal; i++) {
                    await this.repo.deletePicture((<any>originalPicture[i]).id);
                }
            } else if (lengthOriginal === lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalPicture[i]).picture != (<any>newPicture[i]).Picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).Picture);
                    }
                }
            } else if (lengthOriginal < lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalPicture[i]).picture != (<any>newPicture[i]).Picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).Picture);
                    }
                }
                for (let i: number = lengthOriginal; i < lengthNew; i++) {
                    await this.repo.createPicture((<any>newPicture[i]).Picture, postId);
                }
            } else {
                throw new Error('compare picture if else error | function: comparePicture | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    compareTag = async (originalTag: Object, newTag: Object, postId: string) => {
        try {
            let lengthOriginal: number = Object.keys(originalTag).length;
            let lengthNew: number = Object.keys(newTag).length;

            if (lengthOriginal > lengthNew) {
                for (let i: number = 0; i < lengthNew; i++) {
                    if ((<any>originalTag[i]).TagDetail != (<any>newTag[i]).TagDetail) {
                        await this.repo.editTag((<any>newTag[i]).TagDetail, (<any>originalTag[i]).TagID);
                    }
                }
                for (let i: number = lengthNew; i < lengthOriginal; i++) {
                    await this.repo.deleteTag((<any>originalTag[i]).TagID);
                }
            } else if (lengthOriginal === lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalTag[i]).TagDetail != (<any>newTag[i]).TagDetail)
                        await this.repo.editTag((<any>newTag[i]).TagDetail, (<any>originalTag[i]).TagID)
                }
            } else if (lengthOriginal < lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalTag[i]).TagDetail != (<any>newTag[i]).TagDetail) {
                        await this.repo.editTag((<any>newTag[i]).TagDetail, (<any>originalTag[i]).TagID);
                    }
                }
                for (let i: number = lengthOriginal; i < lengthNew; i++) {
                    await this.repo.createTag(postId, (<any>newTag[i]).TagDetail);
                }
            } else throw new Error('compare tag if else error | function: compareTag | file name: editServices')

        } catch (err) {
            throw new Error(err.message);
        }
    }

    editShareNote = async(postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyShareNote: {} = await this.paser.split(body, 'sharenote');
                let tagShareNote: {} = await this.paser.split(body, 'tag');
                let pictureShareNote: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyShareNote, 'sharenote');
                for (let i: number = 0; i < Object.keys(tagShareNote).length; i++) {
                    await this.joi.validate(tagShareNote[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureShareNote).length; i++) {
                    await this.joi.validate(pictureShareNote[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureShareNote, postId);
                await this.compareTag(originalTag, tagShareNote, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyShareNote).Cover,
                    (<any>bodyShareNote).Subject_Name,
                    (<any>bodyShareNote).Section,
                    (<any>bodyShareNote).Instructor_Name,
                    (<any>bodyShareNote).Semeter,
                    (<any>bodyShareNote).Title,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editShareNote | file name: editServices');
            }
        } catch (err) {
            console.error(err.message);
            throw new Error(err.message);
        }
    }

    editShareEvent = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyShareEvent: {} = await this.paser.split(body, 'shareevent');
                let tagShareEvent: {} = await this.paser.split(body, 'tag');
                let pictureShareEvent: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyShareEvent, 'sharenote');
                for (let i: number = 0; i < Object.keys(tagShareEvent).length; i++) {
                    await this.joi.validate(tagShareEvent[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureShareEvent).length; i++) {
                    await this.joi.validate(pictureShareEvent[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureShareEvent, postId);
                await this.compareTag(originalTag, tagShareEvent, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyShareEvent).Cover,
                    (<any>bodyShareEvent).Resgister,
                    (<any>bodyShareEvent).Location,
                    (<any>bodyShareEvent).Condi,
                    (<any>bodyShareEvent).Describ,
                    (<any>bodyShareEvent).Title,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editShareEvent | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editReviewSubject = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyReviewSubject: {} = await this.paser.split(body, 'reviewsubject');
                let tagReviewSubject: {} = await this.paser.split(body, 'tag');
                let pictureReviewSubject: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyReviewSubject, 'reviewbook');
                for (let i: number = 0; i < Object.keys(tagReviewSubject).length; i++) {
                    await this.joi.validate(tagReviewSubject[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureReviewSubject).length; i++) {
                    await this.joi.validate(pictureReviewSubject[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureReviewSubject, postId);
                await this.compareTag(originalTag, tagReviewSubject, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyReviewSubject).SubjectID,
                    (<any>bodyReviewSubject).SubjectName,
                    (<any>bodyReviewSubject).Instructor_Name,
                    (<any>bodyReviewSubject).Des,
                    (<any>bodyReviewSubject).Title,
                    (<any>bodyReviewSubject).Section,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editReviewSubject | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editReviewTutor = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyReviewTutor: {} = await this.paser.split(body, 'reviewtutor');
                let tagReviewTutor: {} = await this.paser.split(body, 'tag');
                let pictureReviewTutor: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyReviewTutor, 'reviewbook');
                for (let i: number = 0; i < Object.keys(tagReviewTutor).length; i++) {
                    await this.joi.validate(tagReviewTutor[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureReviewTutor).length; i++) {
                    await this.joi.validate(pictureReviewTutor[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureReviewTutor, postId);
                await this.compareTag(originalTag, tagReviewTutor, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyReviewTutor).TutorName,
                    (<any>bodyReviewTutor).Academy,
                    (<any>bodyReviewTutor).Subject_Teach,
                    (<any>bodyReviewTutor).Des,
                    (<any>bodyReviewTutor).ContactLink,
                    (<any>bodyReviewTutor).Title,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editReviewTutor | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editReviewBook = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyReviewBook: {} = await this.paser.split(body, 'reviewbook');
                let tagReviewBook: {} = await this.paser.split(body, 'tag');
                let pictureReviewBook: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyReviewBook, 'reviewbook');
                for (let i: number = 0; i < Object.keys(tagReviewBook).length; i++) {
                    await this.joi.validate(tagReviewBook[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureReviewBook).length; i++) {
                    await this.joi.validate(pictureReviewBook[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureReviewBook, postId);
                await this.compareTag(originalTag, tagReviewBook, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyReviewBook).Cover,
                    (<any>bodyReviewBook).Title,
                    (<any>bodyReviewBook).WrittenBy,
                    (<any>bodyReviewBook).Edition,
                    (<any>bodyReviewBook).Link,
                    (<any>bodyReviewBook).Des,
                    (<any>bodyReviewBook).BookName,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editReviewBook | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editFaq = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyFaq: {} = await this.paser.split(body, 'faq');
                let tagFaq: {} = await this.paser.split(body, 'tag');
                let pictureFaq: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyFaq, 'reviewbook');
                for (let i: number = 0; i < Object.keys(tagFaq).length; i++) {
                    await this.joi.validate(tagFaq[i], 'tag');
                }
                for (let i: number = 0; i < Object.keys(pictureFaq).length; i++) {
                    await this.joi.validate(pictureFaq[i], 'picture');
                }

                let originalPicture: Object = await this.repo.fetchPicture(postId);
                let originalTag: {} = await this.repo.fetchTag(postId);

                await this.comparePicture(originalPicture, pictureFaq, postId);
                await this.compareTag(originalTag, tagFaq, postId);

                let parameterToSql: Array<any> = [
                    (<any>bodyFaq).title,
                    (<any>bodyFaq).description,
                    postId
                ]

                await this.repo.editPost(postType, parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editFaq | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editComment = async (commentId: number, userId: string, body: any) => {
        try {
            let owner: {} = await this.repo.fetchOwnerComment(commentId);

            if (<any>owner[0].userId == userId) {
                let bodyComment: {} = await this.paser.split(body, 'comment');

                await this.joi.validate(bodyComment, 'comment');

                let parameterToSql: Array<any> = [
                    (<any>bodyComment).Detail,
                    commentId
                ]

                await this.repo.editComment(parameterToSql);

                return true;
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: editComment | file name: editServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

}