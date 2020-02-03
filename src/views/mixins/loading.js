export const mixinLoading = {
    data() {
        return {
            isLoading: false,
            errorStatus: null,
            errorMessage: "",
        };
    },
    computed: {
        isError() {
            return this.errorStatus !== null;
        },
    },
};
