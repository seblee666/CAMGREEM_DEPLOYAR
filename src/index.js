import express from 'express';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import router from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});