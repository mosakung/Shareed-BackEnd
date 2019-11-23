import EditRepository from './editRepository';
import EditPaser from './editParser';

export default class EditService {
    private repo: EditRepository;
    private paser: EditPaser;

    constructor(repo: EditRepository, paser: EditPaser) {
        this.repo = repo;
        this.paser = paser;
    }

    async findNewPictureId(): Promise<string> {
        let allPictureId = await this.repo.fetchAllPicture();
        let lengthFetch = Object.keys(allPictureId).length;
        let maximumId: number = -1;

        for (let i: number = 0; i < lengthFetch; i++) {
            let pictureId: number = +((<any>allPictureId[i]).id);

            if (isNaN(pictureId)) throw ('function: findMaximumPictureId | class: EditService | error: string to number is NaN');
            else if (pictureId > maximumId) maximumId = pictureId;
        }

        return (maximumId + 1).toString();
    }

    async comparePicture(originalPicture: Object, newPicture: Object, postId: string) {
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
                await this.repo.createPicture(await this.findNewPictureId(), (<any>newPicture[i]).picture, postId);
            }
        } else {
            throw ('comparePicture if else error');
        }
    }

    editReviewBook = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let originalPicture: Object = await this.repo.fetchPicture(postId);
                console.log(originalPicture);
                console.log(Object.keys(originalPicture).length);

            } else {
                return 'editFail'
            }
        } catch (err) {

        }
    }
}