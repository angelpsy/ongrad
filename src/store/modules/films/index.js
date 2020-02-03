import ApiFilms from "@/api/films";

const MutationNames = {
    SET_LIST: "SET_LIST",
};
export const GetterNames = {
    LIST: "LIST",
};
export const ActionNames = {
    /**
     * Action запроса списка фильмов
     * @return {Promise<Response>}
     */
    FETCH_LIST: "FETCH_LIST",
};

const state = {
    list: [],
};
const getters = {
    [GetterNames.LIST](state) {
        return state.list;
    },
};
const mutations = {
    [MutationNames.SET_LIST](state, list) {
        state.list = list;
    },
};
const actions = {
    /**
     * @param commit
     * @return {Promise<Response>}
     */
    [ActionNames.FETCH_LIST]({ commit }) {
        return ApiFilms.getList()
            .then(data => {
                const { films } = data;
                commit(MutationNames.SET_LIST, films);
                return films;
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
