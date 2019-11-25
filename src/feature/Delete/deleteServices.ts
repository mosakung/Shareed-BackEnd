import DeleteRepository from './deleteRepository';

export default class DeleteServices {
    private repo: DeleteRepository;

    constructor(repo: DeleteRepository) {
        this.repo = repo;
    }

    deleteShareNote = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteShareNote(postId);
            } else {
                return 'DeleteFail';
            }

        } catch (err) {
            throw(err.message);
        }
    }

    deleteShareEvent = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteShareEvent(postId);
            } else {
                return 'DeleteFail';
            }

        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewSubject = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewSubject(postId);
            } else {
                return 'DeleteFail';
            }

        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewTutor = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewTutor(postId);
            } else {
                return 'DeleteFail';
            }

        } catch (err) {
            throw(err.message);
        }
    }

    deleteReviewBook = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewBook(postId);
            } else {
                return 'DeleteFail';
            }
        } catch (err) {
            throw(err.message);
        }
    }

    deleteFaq = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteFaq(postId);
            } else {
                return 'DeleteFail';
            }
        } catch (err) {
            throw(err.message);
        }
    }

    deleteComment = async (postId: string, userId: string) => {
        try {
            let owner: {} = await this.repo.deleteOwnerComment(postId);

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteComment(postId);
            } else {
                return 'DeleteFail';
            }
        } catch (err) {
            throw(err.message);
        }
    }

}