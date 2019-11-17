import { Request, Response } from 'express';
import viewService from './viewServices';

class viewControllers {
    private service: viewService;

    constructor(service: viewService) {
        this.service = service
    }

    getShareNote = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getShareNoteAll();
            if (!result) {
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getShareNoteID = async (req: Request, res: Response) => {
        const postID = req.params.id;
        const userID = req.params.userid;
        try {
            const result = await this.service.getShareNote(postID);
            const owner = await this.service.checkOwner(result[0].UserID, userID);
            if (!result && !owner) {
                res.status(251).send();
            }
            res.status(250).send(result, owner);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getShareEvent = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getShareEventAll();
            if (!result) {
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getShareEventID = async (req: Request, res: Response) => {
        const postID = req.params.id;
        const userID = req.params.userid;
        try {
            const result = await this.service.getShareEvent(postID);
            const owner = await this.service.checkOwner(result[0].UserID, userID);
            if (!result && !owner) {
                res.status(251).send();
            }
            res.status(250).send(result, owner);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewSubject = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getReviewSubjectAll();
            if (!result) {
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewSubjectID = async (req: Request, res: Response) => {
        const postID = req.params.id;
        const userID = req.params.userid;
        try {
            const result = await this.service.getReviewSubject(postID);
            const owner = await this.service.checkOwner(result[0].UserID, userID);
            if (!result && !owner) {
                res.status(251).send();
            }
            res.status(250).send(result, owner);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewTutor = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getReviewTutorAll();
            if (!result) {
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewTutorID = async (req: Request, res: Response) => {
        const postID = req.params.id;
        const userID = req.params.userid;
        try {
            const result = await this.service.getReviewTutor(postID);
            const owner = await this.service.checkOwner(result[0].UserID, userID);
            if (!result && !owner) {
                res.status(251).send();
            }
            res.status(250).send(result, owner);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewBook = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getReviewBookAll();
            if (!result) {
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }

    getReviewBookID = async (req: Request, res: Response) => {
        const postID = req.params.id;
        const userID = req.params.userid;
        try {
            const result = await this.service.getReviewBook(postID);
            const owner = await this.service.checkOwner(result[0].UserID, userID);
            if (!result && !owner) {
                res.status(251).send();
            }
            res.status(250).send(result, owner);
        }
        catch (err) {
            console.error('Error:', err.message);
            res.status(500).send();
        }
    }
}

