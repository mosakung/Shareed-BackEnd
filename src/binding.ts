//Import Database
import database from '../server/database';

//Import Class
import ViewControllers from './feature/View/viewControllers';
import ViewRepository from './feature/View/viewRepository';
import ViewServices from './feature/View/viewServices';
import ViewParser from './feature/View/viewParser';

import DeleteControllers from './feature/Delete/deleteControllers';
import DeleteRepository from './feature/Delete/deleteRepository';
import DeleteServices from './feature/Delete/deleteServices';
import SqlDelete from './feature/Delete/deleteSqlRaw';

const databaseOut:database = new database();

export default class Binding {
    private db:database = databaseOut;

    private viewControllers: ViewControllers;
    private deleteControllers: DeleteControllers;

    constructor () {

        const viewParser: ViewParser = new ViewParser();
        const viewRepository: ViewRepository = new ViewRepository(this.db);
        const viewServices: ViewServices = new ViewServices(viewRepository,viewParser);
        this.viewControllers = new ViewControllers(viewServices);

        const sqlDelete : SqlDelete = new SqlDelete();
        const deleteRepository: DeleteRepository = new DeleteRepository(this.db, sqlDelete);
        const deleteServices : DeleteServices = new DeleteServices(deleteRepository);
        this.deleteControllers = new DeleteControllers(deleteServices);

    }

    getViewControllers() {
        return this.viewControllers;
    }

    getDeleteControllers() {
        return this.deleteControllers;
    }

    
}