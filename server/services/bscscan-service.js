const { default: axios } = require("axios")
const config = require('../config');

exports.bscScanService = () => {
    const CancelToken = axios.CancelToken;
    const httpService = axios.create({
        baseURL: config.BASE_BSCSCAN_API_URL
    });
    httpService.interceptors.request.use((req) => {        
        req.params.apikey = config.BSCSCAN_API_KEY
        return req
    })
    return httpService;
}