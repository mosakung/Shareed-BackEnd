//import {Request ,Response} from 'express';
import repoview from './viewRepository';

import express from 'express';


export default async (app:express,repoview: repoview) => {
    app.use(express.json);
    
    /*getReviewbook = async(req: Request,res: Response)=>{
        try{
            const {postID} = req.params;
            const reviewbook =  await this.service.viewShareNote(postID);
            if(!reviewbook) res.status(400).send();
        }
        catch(err){
            console.error('Error',err.message);
        }
    }*/
}

