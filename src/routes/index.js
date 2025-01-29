import { Router } from "express";
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'CamGreen - Login'}));
router.get('/dashboard', (req, res) => res.render('dashboard', {title: 'CamGreen - Login'}));

export default router;