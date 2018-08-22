import axios from  'axios';
import CONST from './const';


const createUser = data => axios.post(CONST.API_URL+"user/create",data);


export default {
    createUser
}