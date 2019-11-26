//Import Database
import database from '../server/database';

//Import schema
import Validation from '../joi/validation';

//Import Class
import ViewControllers from './feature/View/viewControllers';
import ViewRepository from './feature/View/viewRepository';
import ViewServices from './feature/View/viewServices';
import ViewParser from './feature/View/viewParser';
import ViewSql from './feature/View/viewSqlRaw';

import DeleteControllers from './feature/Delete/deleteControllers';
import DeleteRepository from './feature/Delete/deleteRepository';
import DeleteServices from './feature/Delete/deleteServices';
import SqlDelete from './feature/Delete/deleteSqlRaw';

import EditControllers from './feature/Edit/editControllers';
import EditRepository from './feature/Edit/editRepository';
import EditSevices from './feature/Edit/editServices';
import EditSqlRaw from './feature/Edit/editSqlRaw';
import EditPaser from './/feature/Edit/editParser'

import CreateControllers from './feature/Create/createControllers';
import CreateRepository from './feature/Create/createRepository';
import CreateServices from './feature/Create/createServices';
import CreateParser from './feature/Create/createParser';
import CreateSql from './feature/Create/createSql';

const databaseOut:database = new database();

export default class Binding {
    private db: database;
    private joi: Validation;

    private viewControllers: ViewControllers;
    private deleteControllers: DeleteControllers;
    private editControllers: EditControllers;
    private createControllers: CreateControllers;

    constructor () {

        this.db = databaseOut;
        this.joi = new Validation();
        const viewSql : ViewSql = new ViewSql();
        const viewParser: ViewParser = new ViewParser();
        const viewRepository: ViewRepository = new ViewRepository(this.db,viewSql);
        const viewServices: ViewServices = new ViewServices(viewRepository,viewParser);
        this.viewControllers = new ViewControllers(viewServices);

        const sqlDelete: SqlDelete = new SqlDelete();
        const deleteRepository: DeleteRepository = new DeleteRepository(this.db, sqlDelete);
        const deleteServices: DeleteServices = new DeleteServices(deleteRepository);
        this.deleteControllers = new DeleteControllers(deleteServices);

        const sqlEdit: EditSqlRaw = new EditSqlRaw();
        const editRepository: EditRepository = new EditRepository(this.db, sqlEdit);
        const editPaser: EditPaser = new EditPaser();
        const editService: EditSevices = new EditSevices(editRepository, editPaser, this.joi);
        this.editControllers = new EditControllers(editService);
        const createSql : CreateSql = new CreateSql();
        const createParser : CreateParser = new CreateParser();
        const createRepository : CreateRepository = new CreateRepository(this.db,createSql);
        const createServices : CreateServices = new CreateServices(createRepository,this.joi,createParser);
        this.createControllers = new CreateControllers(createServices);

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

    getCreateControllers(){
        return this.createControllers;
    }
    
}