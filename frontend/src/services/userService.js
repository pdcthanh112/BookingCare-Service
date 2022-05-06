import axios from '../axios'

const handleLoginApi = (emailLogin, passwordLogin) => {
    return axios.post('/api/login', {email: emailLogin, password: passwordLogin});
}

export {handleLoginApi}

