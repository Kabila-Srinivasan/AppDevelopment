import axios from "axios";
const URL='http://localhost:8080/register';
class UserRegistrationService{

getAllRegister(){
    return axios.get(URL);
}
createRegister(registers){
    return axios.post(URL,registers);
}
getRegisterById(registerId){
    return axios.get(URL+'/'+registerId);
}
updateRegister(registerId,registers){
    return axios.put(URL+'/'+registerId,registers);
}
deleteRegister(registerId){
    return axios.delete(URL+'/'+registerId);
}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserRegistrationService();
