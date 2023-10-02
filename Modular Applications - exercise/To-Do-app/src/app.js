import page from '../node_modules/page/page.mjs';
import { homeView } from './template/homeTemplate.js';

page('/', homeView);

page.start();