const axios = require('axios');

export const createClient = (options = {}) => axios.create(Object.assign({ baseURL: "https://api-friends-night.herokuapp.com" }, options))

export default createClient()
