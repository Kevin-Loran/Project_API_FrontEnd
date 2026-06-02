import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://34.95.208.101/api'
    : '/api';

export default axios.create({
    baseURL,
});