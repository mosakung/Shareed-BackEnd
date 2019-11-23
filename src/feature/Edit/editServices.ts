import EditRepository from './editRepository';

export default class EditService {
    private repo: EditRepository;

    constructor(repo: EditRepository) {
        this.repo = repo;
    }

    editReviewBook = async (postId: string, userId: string, body: any) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.fetchOwner(postId, postType);

            if (<any>owner[0].userId == userId) {
                return await this.repo.editPost()
            } else {
                return 'editFail'
            }
        } catch (err) {

        }
    }
}