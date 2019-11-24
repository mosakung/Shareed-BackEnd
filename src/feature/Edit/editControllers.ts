import EditService from './editServices';
import { Request, Response } from 'express';

export default class EditControllers {
    private service: EditService;

    constructor(service: EditService) {
        this.service = service;
    }

    editReviewBook = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewBook = await this.service.editReviewBook(postId, userId, body);

            if (!editReviewBook) {
                res.status(251).send();
            } else if (editReviewBook === "onwer not match") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    editReviewBook
                });
            }

        } catch (err) {
            throw (err.message);
            res.status(500).send();
        }
    }
}