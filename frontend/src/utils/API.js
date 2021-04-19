import axios from 'axios';

export const getShortener = (url) => axios.post('/api/shorturl', {url});
export const getOriginal = (id) => axios.post('/api/shorturl/' + id)
