import Repo from './createRepository';

export default class createServices{
    private repo : Repo;
    constructor(repo:Repo){
        this.repo = repo;
    }

    createShareNote = (data: object)=>{
        return 'fail to create'
    }

    
}