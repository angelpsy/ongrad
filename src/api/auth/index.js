const auth = {
    /**
     * @param {string} login
     * @param {string} password
     * @return {Promise<Response>}
     */
    login({ login, password }) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.group("success login");
                console.log({ login, password });
                console.groupEnd();
                resolve(true);
            }, 1500);
        });
    },
    /**
     * @return {Promise<Response>}
     */
    loguot() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("success logout");
                resolve(true);
            }, 1500);
        });
    },
};

export default auth;
