import './style.css';
import { initSite, refreshMain } from './website';
import {getContact, getHome, getMenu} from './tabs';

const btns = initSite(getHome());

btns[0].addEventListener('click', () => refreshMain(getHome()));
btns[1].addEventListener('click', () => refreshMain(getMenu()));
btns[2].addEventListener('click', () => refreshMain(getContact()));
