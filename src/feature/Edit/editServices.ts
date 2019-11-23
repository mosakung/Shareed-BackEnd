import EditRepository from './editRepository';
import EditPaser from './editParser';

export default class EditService {
    private repo: EditRepository;
    private paser: EditPaser;

    constructor(repo: EditRepository, paser: EditPaser) {
        this.repo = repo;
        this.paser = paser;
    }

    editReviewBook = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                let originalPicture: {} = await this.repo.fetchPicture(postId);
                console.log(originalPicture);
                console.log(originalPicture);
                originalPicture.map(x => x.picture).length;
            } else {
                return 'editFail'
            }
        } catch (err) {

        }
    }
}