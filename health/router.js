import * as express from 'express';
import { checkData } from './controller.js';

const checkDataRouter = express.Router();

checkDataRouter.get('/', checkData);

export { checkDataRouter };
