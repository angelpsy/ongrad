import { films as data } from "@/fake-data/films";

const films = {
    /**
     * @return {Promise<Response>}
     */
    getList() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ films: data });
            }, 1500);
        });
    },
};

export default films;
