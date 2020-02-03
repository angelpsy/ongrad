const auth = {
    /**
     * @param {string} email
     * @param {string} password
     * @return {Promise<Response>}
     */
    login({ email, password }) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.group("success login");
                console.log({ email, password });
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
