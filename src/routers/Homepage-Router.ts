import express from 'express';
import Binding from '../binding';

const routerHomepage = express.Router();

const binding : Binding = new Binding();

routerHomepage.get('/:userID',  binding.getViewControllers().getRecentlyPost);

export default routerHomepage;
