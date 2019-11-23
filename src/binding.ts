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

import EditControllers from './feature/Edit/editControllers';
import EditRepository from './feature/Edit/editRepository';
import EditSevices from './feature/Edit/editServices';
import EditSqlRaw from './feature/Edit/editSqlRaw';
import EditPaser from './feature/Edit/editParser';

const databaseOut: database = new database();

export default class Binding {
    private db: database;

    private viewControllers: ViewControllers;
    private deleteControllers: DeleteControllers;
    private editControllers: EditControllers;

    constructor() {
        this.db = databaseOut;

        //const viewRepository: ViewRepository = new ViewRepository(this.db);
        //const viewServices: ViewServices = new ViewServices(viewRepository);
        //this.viewControllers = new ViewControllers(viewServices);

        const sqlDelete: SqlDelete = new SqlDelete();
        const deleteRepository: DeleteRepository = new DeleteRepository(this.db, sqlDelete);
        const deleteServices: DeleteServices = new DeleteServices(deleteRepository);
        this.deleteControllers = new DeleteControllers(deleteServices);

        const sqlEdit: EditSqlRaw = new EditSqlRaw();
        const editRepository: EditRepository = new EditRepository(this.db, sqlEdit);
        const editPaser: EditPaser = new EditPaser();
        const editService: EditSevices = new EditSevices(editRepository, editPaser);
        this.editControllers = new EditControllers(editService);
    }

    getViewControllers() {
        return this.viewControllers;
    }

    getDeleteControllers() {
        return this.deleteControllers;
    }

    getEditControllers() {
        return this.editControllers;
    }

}