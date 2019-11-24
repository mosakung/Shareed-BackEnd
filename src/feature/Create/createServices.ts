import Repo from './createRepository';
import Validation from '../../../joi/validation'

export default class createServices{
    private repo : Repo;
    private validation : Validation;
    constructor(repo:Repo, validation: Validation){
        this.repo = repo;
        this.validation = validation;
    }

    createShareNote = async (data: object) =>{
        try{
            const result = await this.validation.validate(data,'sharenote');
            return this.repo.createShareNote(result);
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createShareEvent = async (data: object) => {
        try{
            const result = await this.validation.validate(data,'shareevent')
        }
        catch(err){}
    }

    createReviewBook = async (data:object) =>{

    }

}