import { films as data } from "@/fake-data/films";
import {getID} from "@/helpers/id";

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
    /**
     * @return {Promise<Response>}
     */
    sendItem(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                const resItem = { ...item };
                if (!resItem.id) resItem.id = getID;
                console.group("success send film");
                console.log({ response: resItem });
                console.groupEnd();
                resolve({ film: resItem });
            }, 1500);
        });
    },
};

export default films;
