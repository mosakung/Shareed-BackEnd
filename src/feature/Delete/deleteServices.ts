import DeleteRepository from './deleteRepository';

export default class DeleteServices {
    private repo: DeleteRepository;

    constructor(repo: DeleteRepository) {
        this.repo = repo;
    }

    deleteShareNote = async (postId: string, userId: string) => {
        try {
            let owner: {} = await this.repo.deleteOwner(postId);

            if(owner[0].UserID == userId) {
                return await this.repo.deleteShareNote(postId);
            } else {
                return 'DeleteFail';
            }

        } catch (err) {
            console.error('Error', err.message);
        }
    }

}