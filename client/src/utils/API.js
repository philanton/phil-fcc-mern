import axios from 'axios';

export const getShortener = (url) => axios.post('/api/shorturl', {url});
export const getOriginal = (id) => axios.post('/api/shorturl/' + id);

export const getFileInfo = (data) => axios.post('/api/fileanalyse', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
});
