//Import Database
import database from '../server/database';

//Import Class
import ViewControllers from './feature/View/viewControllers';
import ViewRepository from './feature/View/viewRepository';
import ViewServices from './feature/View/viewServices';

import DeleteControllers from './feature/Delete/deleteControllers';
import DeleteRepository from './feature/Delete/deleteRepository';
import DeleteServices from './feature/Delete/deleteServices';
import SqlDelete from './feature/Delete/deleteSqlRaw';

export default class Binding {
    private db:database;

    private viewControllers: ViewControllers;
    private deleteControllers: DeleteControllers;

    constructor () {
        this.db = new database();

        const viewRepository: ViewRepository = new ViewRepository(this.db);
        const viewServices: ViewServices = new ViewServices(viewRepository);
        this.viewControllers = new ViewControllers(viewServices);

        const sqlDelete : SqlDelete = new SqlDelete();
        const deleteRepository: DeleteRepository = new DeleteRepository(this.db, sqlDelete);
        const deleteServices : DeleteServices = new DeleteServices(deleteRepository);
        this.deleteControllers = new DeleteControllers(deleteServices);

    }

    getViewControllers() {
        return this.viewControllers;
    }

    
}