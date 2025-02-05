import { Router } from "express";
import {ConsultarUsuarios} from "../services/conexion.js";
const router = Router();
import { IniciarSesionUsuario } from "../services/conexion.js";


router.get('/', (req, res) => res.render('log', {title: 'Login'}));
router.get('/dashboard', (req, res) => res.render('dashboard', {title: 'Dashboard'}));
router.get('/logros', (req, res) => res.render('logros', {title: 'Logros'}));
router.get('/perfil', (req, res) => res.render('perfil', {title: 'Perfil'}));
router.get('/recompensas', (req, res) => res.render('recompensas', {title: 'Recompensas'}));
router.get('/tareas', (req, res) => res.render('tareas', {title: 'Tareas'}));
router.get('/api/usuarios', async (req, res) => {
    const usuarios = await ConsultarUsuarios();
    res.status(200).json(usuarios);
});

router.post('/api/login', async (req, res) => {
    const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message: 'Usuario y contraseña son requeridos'});
        }

    const result = await IniciarSesionUsuario(username, password);
        if(result.success){
            res.status(200).json(result);
        }else{
            res.status(401).json({success: false, message: 'Accesos invalidos'});
        }
});
export default router;