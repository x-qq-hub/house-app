import axios from 'axios';
const IP='http://localhost:8000';

export let getLogin=(param)=>axios.post(`${IP}/login`,param)


