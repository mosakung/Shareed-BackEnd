import DeleteServices from './deleteServices';
import { Request, Response } from 'express';
import chalk from 'chalk';

export default class DeleteControllers {
    private service: DeleteServices;
    private log: any;

    constructor(service: DeleteServices) {
        this.service = service;
        this.log = console;
    }

    deleteShareNote = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteShareNote = await this.service.deleteShareNote(id, userId);

            if (!deleteShareNote) {
                this.log.log('\n' + chalk.yellow('!deleteShareNote'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteShareNote
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteShareEvent = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteShareEvent = await this.service.deleteShareEvent(id, userId);

            if (!deleteShareEvent) {
                this.log.log('\n' + chalk.yellow('!deleteShareEvent'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteShareEvent
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteReviewSubject = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewSubject = await this.service.deleteReviewSubject(id, userId);

            if (!deleteReviewSubject) {
                this.log.log('\n' + chalk.yellow('!deleteReviewSubject'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteReviewSubject
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteReviewTutor = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewTutor = await this.service.deleteReviewTutor(id, userId);

            if (!deleteReviewTutor) {
                this.log.log('\n' + chalk.yellow('!deleteReviewTutor'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteReviewTutor
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteReviewBook = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteReviewBook = await this.service.deleteReviewBook(id, userId);

            if (!deleteReviewBook) {
                this.log.log('\n' + chalk.yellow('!deleteReviewBook'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteReviewBook
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteFaq = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteFaq = await this.service.deleteFaq(id, userId);

            if (!deleteFaq) {
                this.log.log('\n' + chalk.yellow('!deleteFaq'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteFaq
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }

    deleteComment = async (req: Request, res: Response) => {
        try {
            let { id, userId }: { id: string, userId: string } = req.params;
            const deleteComment = await this.service.deleteComment(id, userId);

            if (!deleteComment) {
                this.log.log('\n' + chalk.yellow('!deleteComment'));
                res.status(300).send();
            } else {
                res.status(250).json({
                    deleteComment
                });
            }
        } catch (err) {
            this.log.error('\n' + chalk.red(err));
            res.status(500).send(err.message);
        }
    }
}