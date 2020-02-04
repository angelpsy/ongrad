import axios from "axios";
const CancelToken = axios.CancelToken;

const { VUE_APP_API_BASE_URL: API_BASE_URL } = process.env;

/**
 * @param {string} url
 * @param {object=} options
 * @param {function=} setCancelFetch Фукнция отмены запроса
 * @return {Promise<Response>}
 */
export const fetchWrapper = (
    url,
    { method = "GET", body } = {},
    setCancelFetch
) => {
    return axios({
        url: url,
        baseURL: API_BASE_URL,
        withCredentials: true,
        method: method,
        data: body,
        cancelToken: new CancelToken(function executor(c) {
            setCancelFetch && setCancelFetch(c);
        }),
    });
};
