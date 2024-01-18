import { UsersManager } from '../../models/User.js';


export async function postUsersController(req, res) {
    const datosUsuario = req.body
    const usuario = await UsersManager.registrar(datosUsuario)
        res.status(201).json(usuario)
  }

  //------------------------

export async function getUsersController  (req, res) {
    const query = req.query
    const users = await UsersManager.buscarUsuario(query)
    res.json(users)
}