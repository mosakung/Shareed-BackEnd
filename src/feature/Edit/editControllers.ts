import EditService from './editServices';
import { Request, Response } from 'express';
import chalk from 'chalk';

export default class EditControllers {
    private service: EditService;

    constructor(service: EditService) {
        this.service = service;
    }

    editShareNote = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareNote = await this.service.editShareNote(postId, userId, body);

            if (!editShareNote) {
                console.log('\n' + chalk.yellow('!editShareNote'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareNote,
                    body
                });
            }
        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    editShareEvent = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareEvent = await this.service.editShareEvent(postId, userId, body);

            if (!editShareEvent) {
                console.log('\n' + chalk.yellow('!editShareEvent'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareEvent,
                    body
                });
            }
        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

     editReviewSubject = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewSubject = await this.service.editReviewSubject(postId, userId, body);

            if (!editReviewSubject) {
                console.log('\n' + chalk.yellow('!editReviewSubject'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewSubject,
                    body
                });
            }
        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

     editReviewTutor = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewTutor = await this.service.editReviewTutor(postId, userId, body);

            if (!editReviewTutor) {
                console.log('\n' + chalk.yellow('!editReviewTutor'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewTutor,
                    body
                });
            }
        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    editReviewBook = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewBook = await this.service.editReviewBook(postId, userId, body);

            if (!editReviewBook) {
                console.log('\n' + chalk.yellow('!editReviewBook'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewBook,
                    body
                });
            }

        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    editFaq = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editFaq = await this.service.editFaq(postId, userId, body);

            if (!editFaq) {
                console.log('\n' + chalk.yellow('!editFaq'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editFaq,
                    body
                });
            }

        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    editComment = async (req: Request, res: Response) => {
        try {
            let { commentId, userId }: { commentId: number, userId: string } = req.params;
            let body: {} = req.body;

            const editComment = await this.service.editComment(commentId, userId, body);

            if (!editComment) {
                console.log('\n' + chalk.yellow('!editComment'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editComment,
                    body
                });
            }

        } catch (err) {
            console.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }
}