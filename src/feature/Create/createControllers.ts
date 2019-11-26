import { Request, Response } from 'express'
import CreateServices from './createServices';

export default class createControllers {

    private services: CreateServices;

    constructor(services: CreateServices) {
        this.services = services;
    }

    createShareNote = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createShareNote(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createShareEvent = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createShareEvent(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createReviewBook = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createReviewBook(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createReviewTutor = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createReviewTutor(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createReviewSubject = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createReviewSubject(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createFaq = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createFaq(req.body, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }

    createComment = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createComment(req.body,req.params.postID, req.params.userId);
            if (!result) { res.status(300).send(''); }
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.message);
            res.status(251).send(err.message);
        }
    }
}