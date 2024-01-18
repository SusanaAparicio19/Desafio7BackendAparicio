import { Router } from 'express';
import { soloLogueadosApi } from '../../middlewares/autorizar.js';
import { getUsersController, postUsersController } from '../../controllers/apiR.controllers/usersRouter.controller.js';
import { autenticarUsuario } from '../../middlewares/autenticar.js';
export const usersRouter = Router()

//--------------

usersRouter.post('/', autenticarUsuario, soloLogueadosApi, postUsersController)

//----------------------

usersRouter.get('/current', autenticarUsuario, soloLogueadosApi, getUsersController );