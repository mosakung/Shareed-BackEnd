import { Request, Response } from 'express';
import viewService from './viewServices';
import chalk from 'chalk';

export default class ViewControllers {
    private service: viewService;

    constructor(service: viewService) {
        this.service = service
    }

    getShareNote = async (req: Request, res: Response) => {
        try {
            const postID = req.params.postID;
            const result = await this.service.getShareNoteAll(postID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getShareNoteID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getShareNote(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else res.status(250).send(result);        
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getShareEvent = async (req: Request, res: Response) => {
        try {
            const postID = req.params.postID;
            const result = await this.service.getShareEventAll(postID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getShareEventID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getShareEvent(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else res.status(250).send(result);       
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewSubject = async (req: Request, res: Response) => {
        try {
            const postID = req.params.postID;
            const result = await this.service.getReviewSubjectAll(postID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewSubjectID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getReviewSubject(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewTutor = async (req: Request, res: Response) => {
        try {
            const postID = req.params.postID;
            const result = await this.service.getReviewTutorAll(postID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewTutorID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getReviewTutor(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewBook = async (req: Request, res: Response) => {
        try {
            const page = req.params.page;
            const result = await this.service.getReviewBookAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getReviewBookID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getReviewBook(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else {res.status(250).send(result);}
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getFaq = async (req: Request, res: Response) => {
        try {
            const postID = req.params.postID;
            const result = await this.service.getFaqAll(postID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }

    getFaqID = async (req: Request, res: Response) => {
        const { postID, userID } = req.params;
        try {
            const result = await this.service.getFaq(postID,userID);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            else if (result == ''){
                res.status(300).send('not found in database');
            }
            else {res.status(250).send(result);}
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send();
        }
    }
    
}

