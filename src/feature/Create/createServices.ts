import Repo from './createRepository';
import Validation from '../../../joi/validation';
import Parser from './createParser';
import { connect } from 'http2';

export default class createServices{
    private repo : Repo;
    private validation : Validation;
    private parser: Parser;

    constructor(repo:Repo, validation: Validation, parser:Parser){
        this.repo = repo;
        this.validation = validation;
        this.parser = parser;
    }

    createShareNote = async (data: Object) =>{
        try{
            const result = await this.validation.validate(this.parser.parserShareNote(data),'sharenote');
            const content = await this.validation.validate(this.parser.parserContent(data),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createShareEvent = async (data: object) => {
        try{
            const result = await this.validation.validate(data,'shareevent');
            return this.repo.createShareEvent(result);
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createReviewBook = async (data: object) => {
        try{
            const result = await this.validation.validate(data,'reviewbook');
            return this.repo.createReviewBook(result);
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createReviewTutor = async (data: object) => {
        try{
            const result = await this.validation.validate(data,'reviewtutor');
            return this.repo.createReviewTutor(result);
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createFaq = async (data: object) => {
        try{
            const result = await this.validation.validate(data,'faq');
            return this.repo.createFaq(result);
        }
        catch(err){ throw new Error ("Error Services"); }
    }

}

