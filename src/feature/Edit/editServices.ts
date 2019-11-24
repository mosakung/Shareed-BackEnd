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

    async comparePicture(originalPicture: Object, newPicture: Object, postId: string) {
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
                throw new Error('compare picture if else error | edit service');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async compareTag(originalTag: Object, newTag: Object, postId: string) {
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
            } else throw new Error('compare tag if else error | edit service')

        } catch (err) {
            throw new Error(err.message);
        }
    }

    async editShareNote (postId: string, userId: string, body: any) {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let bodyShareNote: {} = await this.paser.split(body, 'sharenote');
                let tagShareNote: {} = await this.paser.split(body, 'tag');
                let pictureShareNote: {} = await this.paser.split(body, 'picture');

                await this.joi.validate(bodyShareNote, 'sharenote');
                await this.joi.validate(tagShareNote, 'tag');
                await this.joi.validate(pictureShareNote, 'picture');

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
                throw new Error('onwer not match | edit service');
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
                await this.joi.validate(tagReviewBook, 'tag');
                await this.joi.validate(pictureReviewBook, 'picture');

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
                throw new Error('onwer not match | edit service');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }


}