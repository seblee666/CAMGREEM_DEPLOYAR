import { Router } from "express";
import {ConsultarUsuarios} from "../services/conexion.js";
const router = Router();


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
export default router;