import express from 'express';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));