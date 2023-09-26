import { postRequest } from "./axios";

const prefix = '/api/v1/member'

const login = (payload) => {
    postRequest(`${prefix}/login`, payload)
}

export default {
    login
}