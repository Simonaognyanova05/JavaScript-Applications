import page from '../node_modules/page/page.mjs';
import { navbarTemplate } from './templates/navbarTemplate.js';

page('', navbarTemplate);

page.start();