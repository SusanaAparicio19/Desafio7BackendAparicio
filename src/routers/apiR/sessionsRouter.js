import { Router } from 'express'

import { deleteSessionsController, getSessionsController } from '../../controllers/apiR.controllers/sessionsRouter.controller.js'

export const sessionsRouter = Router()



//----------------------  
sessionsRouter.get('/current', getSessionsController)


//------------------------ 
sessionsRouter.delete('/current', deleteSessionsController)



