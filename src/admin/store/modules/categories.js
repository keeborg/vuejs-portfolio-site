export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {},
    actions: {
        async addCategory(context, title) {
            try {
                const response = await this.$axios.post('/categories', { title });
                console.log(response);
            } catch (error) {
                throw new Error(error);
            }
        },
        async fetchCategories(context) {
            const response = await this.$axios.get('/categories');
            console.log(response);
        }
    }
}