import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000'})

export const fetchProducts = (query) => {
    let q = '/api/enlistbusiness/';
    if(query) {
        q = query;
    }
    return API.get(q);
};
