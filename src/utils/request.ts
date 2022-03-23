import axios from 'axios';

const request = axios.create({
    baseURL: 'http://3.141.23.218:5000'
});

export default request;