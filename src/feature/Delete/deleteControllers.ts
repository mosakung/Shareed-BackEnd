import DeleteServices from './deleteServices';
import { Request, Response } from 'express';

export default class DeleteControllers {
    private service: DeleteServices;

    constructor(service: DeleteServices) {
        this.service = service;
    }

    deleteShareNote = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteShareNote = await this.service.deleteShareNote(id, userId);

            if (!deleteShareNote) {
                res.status(251).send();
            } else if (deleteShareNote === "DeleteFail") {
                res.status(300).send();
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

    deleteShareEvent = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteShareEvent = await this.service.deleteShareEvent(id, userId);

            if (!deleteShareEvent) {
                res.status(251).send();
            } else if (deleteShareEvent === "DeleteFail") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteShareEvent
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }

    deleteReviewSubject = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewSubject = await this.service.deleteReviewSubject(id, userId);

            if (!deleteReviewSubject) {
                res.status(251).send();
            } else if (deleteReviewSubject === "DeleteFail") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteReviewSubject
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }

    deleteReviewTutor = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewTutor = await this.service.deleteReviewTutor(id, userId);

            if (!deleteReviewTutor) {
                res.status(251).send();
            } else if (deleteReviewTutor === "DeleteFail") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteReviewTutor
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }

    deleteReviewBook = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewBook = await this.service.deleteReviewBook(id, userId);

            if (!deleteReviewBook) {
                res.status(251).send();
            } else if (deleteReviewBook === "DeleteFail") {
                res.status(300).send();
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

    deleteFaq = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteFaq = await this.service.deleteFaq(id, userId);

            if (!deleteFaq) {
                res.status(251).send();
            } else if (deleteFaq === "DeleteFail") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteFaq
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }

    deleteComment = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteComment = await this.service.deleteComment(id, userId);

            if (!deleteComment) {
                res.status(251).send();
            } else if (deleteComment === "DeleteFail") {
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteComment
                });
            }
        } catch (err) {
            console.error('Error', err.message);
            res.status(500).send();
        }
    }
}