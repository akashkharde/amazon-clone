import  axios from 'axios';

const instance = axios.create({
    url : `https://cors-anywhere.herokuapp.com/${'http://127.0.0.1:3000/clone-5f259/us-central1/api'}`
});

export default instance;