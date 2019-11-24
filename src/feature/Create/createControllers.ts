import { Request, Response } from 'express'
import CreateServices from './createServices';

export default class createControllers {

    private services: CreateServices;

    constructor(services: CreateServices) {
        this.services = services;
    }

    createShareNote = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createShareNote(req.body);
            if (!result) { res.status(251).send(); }
            else if (result === 'fail to create') {
                res.status(300).send("error to create post");
            }
            else {
                res.status(250).send('create complete');
            }
        }
        catch (err) { throw new Error(err.message); }
    }


}