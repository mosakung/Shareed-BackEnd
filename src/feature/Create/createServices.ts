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

    createShareNote = async (data: Object,userId:string) =>{
        try{
            const result = await this.validation.validate(this.parser.parserShareNote(data,userId),'sharenote');
            const content = await this.validation.validate(this.parser.parserContent(data,result),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            return true;
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createShareEvent = async (data: Object) => {
        try{
            const result = await this.validation.validate(this.parser.parserShareEvent(data),'shareevent');
            const content = await this.validation.validate(this.parser.parserContent(data),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            return true;
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createReviewBook = async (data: Object) => {
        try{
            const result = await this.validation.validate(this.parser.parserReviewBook(data),'reviewbook');
            const content = await this.validation.validate(this.parser.parserContent(data),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            return true;
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createReviewTutor = async (data: Object) => {
        try{
            const result = await this.validation.validate(this.parser.parserReviewTutor(data),'reviewtutor');
            const content = await this.validation.validate(this.parser.parserContent(data),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            return true;
        }
        catch(err){ throw new Error ("Error Services"); }
    }

    createFaq = async (data: Object) => {
        try{
            const result = await this.validation.validate(this.parser.parserFaq(data),'faq');
            const content = await this.validation.validate(this.parser.parserContent(data),'picture');
            const tag = await this.validation.validate(this.parser.parserTagPost(data),'tag');
            await this.repo.createShareNote(result);
            await this.repo.createPostContent(content);
            await this.repo.createPostTag(tag);
            return true;
        }
        catch(err){ throw new Error ("Error Services"); }
    }

}

