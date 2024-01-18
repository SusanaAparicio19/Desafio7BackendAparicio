import { UsersManager } from "../models/User.js";


// middleware/autenticacion.js


export async function autenticarUsuario(email, password) {
  let datosUsuario;

  if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
    datosUsuario = {
      email: 'admin',
      nombre: 'admin',
      apellido: 'admin',
      rol: 'admin'
    };
  } else {
    const usuario = await UsersManager.findOne({ email }).lean();

    if (!usuario || password !== usuario.password) {
      throw new Error('Login failed');
    }

    datosUsuario = {
      email: usuario.email,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      rol: 'usuario'
    };
  }

  return datosUsuario;
}





/*
export async function autenticarUsuario (req, res) {
    try {
      console.log(req.body);
        const { email, password } = req.body
        let datosUsuario
      
        if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
          datosUsuario = {
            email: 'admin',
            nombre: 'admin',
            apellido: 'admin',
            rol: 'admin'
          }
        } else {
          const usuario = await UsersManager.findOne({ email }).lean()
          console.log(usuario);
          if (!usuario || password !== usuario.password) {
            return res.status(400).json({ status: 'error', message: 'login failed' })
          }
      
          datosUsuario = {
            email: usuario.email,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            rol: 'usuario'
          }
        }
    
      return res.status(201).json({ status: 'success', message: 'login success' })
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error })
  }
  }*/