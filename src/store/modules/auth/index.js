import ApiAuth from "@/api/auth";

const MutationNames = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT: "LOGOUT",
};
export const GetterNames = {
    IS_AUTH: "IS_AUTH",
};
export const ActionNames = {
    /**
     * Action отправки данных для авторизации на сервере
     * @param {{login: string, password: string}} payload
     * @return {Promise<Response>}
     */
    LOGIN_FETCH: "LOGIN_FETCH",
    /**
     * Action logout на сервере
     * @return {Promise<Response>}
     */
    LOGOUT: "LOGOUT",
};

const state = {
    isAuth: false,
};
const getters = {
    [GetterNames.IS_AUTH](state) {
        return state.isAuth;
    },
};
const mutations = {
    [MutationNames.LOGIN_SUCCESS](state) {
        state.isAuth = true;
    },
    [MutationNames.LOGIN_FAIL](state) {
        state.isAuth = false;
    },
    [MutationNames.LOGOUT](state) {
        state.isAuth = false;
    },
};
const actions = {
    /**
     * @param commit
     * @param {{login: string, password: string}} payload
     * @return {Promise<Response>}
     */
    [ActionNames.LOGIN_FETCH]({ commit }, payload) {
        return ApiAuth.login(payload)
            .then(data => {
                commit(MutationNames.LOGIN_SUCCESS);
                return data;
            })
            .catch(error => {
                commit(MutationNames.LOGIN_FAIL);
                return Promise.reject(error);
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
