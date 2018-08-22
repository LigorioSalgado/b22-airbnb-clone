import axios from  'axios';
import CONST from './const';


const createUser = data => axios.post(CONST.API_URL+"user/create",data);

const loginUser =  data=> axios.post(CONST.API_URL+"login",data)


export default {
    createUser,
    loginUser
}