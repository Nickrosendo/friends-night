const axios = require('axios');

export const createClient = (options = {}) => axios.create(Object.assign({ baseURL: "http://localhost:8080" }, options))

export default createClient()
