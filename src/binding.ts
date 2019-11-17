//Import Database
import database from '../server/database';

//Import Class
import ViewControllers from './feature/View/viewControllers';
import ViewRepository from './feature/View/viewRepository';
import ViewServices from './feature/View/viewServices';


export default class Binding {
    private db:database;

    private viewControllers: ViewControllers;

    constructor () {
        this.db = new database();

        const viewRepository: ViewRepository = new ViewRepository(this.db);
        const viewServices: ViewServices = new ViewServices(viewRepository);
        this.viewControllers = new ViewControllers(viewServices);
    }

    getViewControllers() {
        return this.viewControllers;
    }

    
}