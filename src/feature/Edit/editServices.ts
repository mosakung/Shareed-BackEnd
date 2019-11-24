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
                    if ((<any>originalPicture[i]).picture != (<any>newPicture).picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).picture);
                    }
                }
                for (let i: number = lengthNew; i < lengthOriginal; i++) {
                    await this.repo.deletePicture((<any>originalPicture[i]).id);
                }
            } else if (lengthOriginal === lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalPicture[i]).picture != (<any>newPicture).picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).picture);
                    }
                }
            } else if (lengthOriginal < lengthNew) {
                for (let i: number = 0; i < lengthOriginal; i++) {
                    if ((<any>originalPicture[i]).picture != (<any>newPicture).picture) {
                        await this.repo.editPicture((<any>originalPicture[i]).id, (<any>newPicture[i]).picture);
                    }
                }
                for (let i: number = lengthOriginal; i < lengthNew; i++) {
                    await this.repo.createPicture((<any>newPicture[i]).picture, postId);
                }
            } else {
                throw new Error('comparePicture if else error | edit service');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async compareTag(originalTag: Object, newTag: Object, postId: string) {
        try {
            
        } catch (err) {
            throw new Error(err.message);
        }
    }

    editReviewBook = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {


                //await this.joi.validate(body, 'reviewbook');
                //await this.joi.validate(tag, 'tag');
                //await this.joi.validate(picture, 'picture');



                let originalPicture: Object = await this.repo.fetchPicture(postId);
                console.log(originalPicture);
                console.log(Object.keys(originalPicture).length);

                return 1;
            } else {
                throw new Error('onwer not match | edit service');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
}