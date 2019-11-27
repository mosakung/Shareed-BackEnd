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
            const page = req.params.page;
            const result = await this.service.getShareNoteAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
        }
    }

    getShareEvent = async (req: Request, res: Response) => {
        try {
            const page = req.params.page;
            const result = await this.service.getShareEventAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
        }
    }

    getReviewSubject = async (req: Request, res: Response) => {
        try {
            const page = req.params.page;
            const result = await this.service.getReviewSubjectAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
        }
    }

    getReviewTutor = async (req: Request, res: Response) => {
        try {
            const page = req.params.page;
            const result = await this.service.getReviewTutorAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
        }
    }

    getFaq = async (req: Request, res: Response) => {
        try {
            const page = req.params.page;
            const result = await this.service.getFaqAll(page);
            if (!result) {
                console.log('\n' + chalk.yellow('!result'));
                res.status(251).send();
            }
            res.status(250).send(result);
        }
        catch (err) {
            console.error('\n' + chalk.red('Error:', err.message));
            res.status(500).send(err.message);
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
            res.status(500).send(err.message);
        }
    }
    
}

