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
            
            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteShareNote(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteShareNote | file name: deleteServices');
            }

        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteShareEvent = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);
            
            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteShareEvent(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteShareEvent | file name: deleteServices');
            }

        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteReviewSubject = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);
            
            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewSubject(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteReviewSubject | file name: deleteServices');
            }

        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteReviewTutor = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewTutor(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteReviewTutor | file name: deleteServices');
            }

        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteReviewBook = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);
            
            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteReviewBook(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteReviewBook | file name: deleteServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteFaq = async (postId: string, userId: string) => {
        try {
            let postType: string = postId.substring(0, 1);
            let owner: {} = await this.repo.deleteOwner(postId, postType);

            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteFaq(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteFaq | file name: deleteServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    deleteComment = async (postId: string, userId: string) => {
        try {
            let owner: {} = await this.repo.deleteOwnerComment(postId);
            
            if(owner) throw Error('not found this data from (' + postId + ')');

            if ((<any>owner[0]).userId == userId) {
                return await this.repo.deleteComment(postId);
            } else {
                throw new Error('onwer not match this (req: ' + userId + ' original: ' + owner + ') | function: deleteComment | file name: deleteServices');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

}