import { Request, Response } from 'express'
import CreateServices from './createServices';

export default class createControllers {

    private services: CreateServices;

    constructor(services: CreateServices) {
        this.services = services;
    }

    createShareNote = async (req: Request, res: Response) => {
        try {
            const result = await this.services.createShareNote(req.body,req.params.userId);
            if(!result) {res.status(300).send('');}
            res.status(250).send('create complete');
        }
        catch (err) {
            console.error(err.mesage);
            res.status(251).send();
        }
    }

}