const getItem = (key) => {
    localStorage.getItem(key);
}

const getAccessToken = () => {
    return getItem('accessToken');
}

export {
    getAccessToken,
}