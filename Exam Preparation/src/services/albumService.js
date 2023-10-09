import * as request from './requester.js';


//data/albums
const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () => request.get(`${baseUrl}/?sortBy=_createdOn%20desc&distinct=name`);