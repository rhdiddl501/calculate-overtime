const getItem = (key) => {
    localStorage.getItem(key);
}

const getAccessToken = () => {
    return getItem('accessToken');
}

const getRefreshToken = () => {
    return getItem('refreshToken');
}

export {
    getAccessToken,
    getRefreshToken
}