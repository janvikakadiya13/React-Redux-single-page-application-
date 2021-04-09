import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-builder-a2e75.firebaseio.com/'
});

export default instance;