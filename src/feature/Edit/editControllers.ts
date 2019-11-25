import EditService from './editServices';
import { Request, Response } from 'express';

export default class EditControllers {
    private service: EditService;

    constructor(service: EditService) {
        this.service = service;
    }

    async editShareNote (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareNote = await this.service.editShareNote(postId, userId, body);

            if (!editShareNote) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareNote,
                    body
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    async editShareEvent (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareEvent = await this.service.editShareEvent(postId, userId, body);

            if (!editShareEvent) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareEvent,
                    body
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    async editReviewSubject (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewSubject = await this.service.editReviewSubject(postId, userId, body);

            if (!editReviewSubject) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewSubject,
                    body
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    async editReviewTutor (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewTutor = await this.service.editReviewTutor(postId, userId, body);

            if (!editReviewTutor) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewTutor,
                    body
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    editReviewBook = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewBook = await this.service.editReviewBook(postId, userId, body);

            if (!editReviewBook) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewBook,
                    body
                });
            }

        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    editFaq = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editFaq = await this.service.editFaq(postId, userId, body);

            if (!editFaq) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editFaq,
                    body
                });
            }

        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }

    editComment = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editComment = await this.service.editComment(postId, userId, body);

            if (!editComment) {
                res.status(300).send();
            }else {
                res.status(250).json({
                    editComment,
                    body
                });
            }

        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    }
}