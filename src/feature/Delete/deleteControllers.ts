import DeleteServices from './deleteServices';
import { Request, Response } from 'express';

export default class DeleteControllers {
    private service: DeleteServices;

    constructor(service: DeleteServices) {
        this.service = service;
    }

    deleteShareNote = async (req: Request, res: Response) => {

        try {
            const { id, userId } = req.params;
            const deleteShareNote = await this.service.deleteShareNote(id, userId);

            if (!deleteShareNote) {
                res.status(249).send();
            } else if (deleteShareNote === "DeleteFail") {
                res.status(251).send();
            } else {
                res.status(250).json({
                    deleteShareNote
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }

    deleteReviewBook = async (req: Request, res: Response) => {

        try {
            const { id, userId } = req.params;
            const deleteReviewBook = await this.service.deleteReviewBook(id, userId);

            if (!deleteReviewBook) {
                res.status(249).send();
            } else if (deleteReviewBook === "DeleteFail") {
                res.status(251).send();
            } else {
                res.status(250).json({
                    deleteReviewBook
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }
}