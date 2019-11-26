import EditService from './editServices';
import { Request, Response } from 'express';
import chalk from 'chalk';

export default class EditControllers {
    private service: EditService;
    private log: any;

    constructor(service: EditService) {
        this.service = service;
        this.log = console;
    }

    async editShareNote (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareNote = await this.service.editShareNote(postId, userId, body);

            if (!editShareNote) {
                this.log.log('\n' + chalk.yellow('!editShareNote'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareNote,
                    body
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    async editShareEvent (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editShareEvent = await this.service.editShareEvent(postId, userId, body);

            if (!editShareEvent) {
                this.log.log('\n' + chalk.yellow('!editShareEvent'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editShareEvent,
                    body
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    async editReviewSubject (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewSubject = await this.service.editReviewSubject(postId, userId, body);

            if (!editReviewSubject) {
                this.log.log('\n' + chalk.yellow('!editReviewSubject'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewSubject,
                    body
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    async editReviewTutor (req: Request, res: Response) {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewTutor = await this.service.editReviewTutor(postId, userId, body);

            if (!editReviewTutor) {
                this.log.log('\n' + chalk.yellow('!editReviewTutor'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewTutor,
                    body
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    editReviewBook = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editReviewBook = await this.service.editReviewBook(postId, userId, body);

            if (!editReviewBook) {
                this.log.log('\n' + chalk.yellow('!editReviewBook'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editReviewBook,
                    body
                });
            }

        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    editFaq = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editFaq = await this.service.editFaq(postId, userId, body);

            if (!editFaq) {
                this.log.log('\n' + chalk.yellow('!editFaq'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editFaq,
                    body
                });
            }

        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }

    editComment = async (req: Request, res: Response) => {
        try {
            let { postId, userId }: { postId: string, userId: string } = req.params;
            let body: {} = req.body;

            const editComment = await this.service.editComment(postId, userId, body);

            if (!editComment) {
                this.log.log('\n' + chalk.yellow('!editComment'));
                res.status(300).send();
            }else {
                res.status(250).json({
                    editComment,
                    body
                });
            }

        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send();
        }
    }
}