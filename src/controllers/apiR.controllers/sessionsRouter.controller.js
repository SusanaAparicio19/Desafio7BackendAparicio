


export async function getSessionsController(req, res) {
  const datosUsuario = req.body
    const sessionResult = await buscarSession(datosUsuario);
    res.status(201).json(sessionResult)
  }



 
//-----------------------------

export async function deleteSessionsController(req, res) {
     await deleteSession(req);
    res.json({ status: 'success', message: 'logout OK' });
  }
