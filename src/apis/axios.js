import axios from 'axios'
import { getAccessToken, getRefreshToken } from 'Hooks/useBrowser';

const BASE_URL = 'http://localhost:8080';

const accessToken = getAccessToken();
const refreshToken = getRefreshToken();

    const axiosApi = axios.create({
        baseURL: BASE_URL,
        headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + accessToken,
        // 'refreshToken': refreshToken,
        },
    });

const postRequest = (url, payload) => {
    axiosApi.post(url,payload)
    .then((data) => {
        console.log(data);
    })
    .catch((errer) => {
        console.log(errer);
    })
        
}

export {
    postRequest
}

