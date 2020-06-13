export default {
    namespaced: true,
    state: {
        reviews: []
    },
    mutations: {
        ADD_REVIEW(state, review) {
            state.reviews.push(review);
        },
        SET_REVIEWS(state, reviews) {
            state.reviews = [...reviews];
        },
        UPDATE_REVIEW(state, reviewToUpdate) {
            state.reviews = state.reviews.map(review => {
                if (review.id === reviewToUpdate.id) {
                    review = { ...reviewToUpdate };
                }
                return review;
            });
        },
        DELETE_REVIEW(state, id) {
            state.reviews = state.reviews.filter(review => review.id !== id);
        }
    },
    actions: {
        async fetchReviews(context, userId) {
            try {
                const response = await this.$axios.get('/reviews/' + userId);
                console.log('Fetched reviews');
                console.log(response);
                context.commit('SET_REVIEWS', response.data);
                return response;
            } catch (error) {
                return error;
            }
        },
        async createReview(context, review) {
            try {
                const response = await this.$axios.post('/reviews', review);
                context.commit('ADD_REVIEW', response.data);
                return response;
            } catch (error) {
                return error;
            }
        },
        async updateReview(context, { id, review }) {
            try {
                const response = await this.$axios.post('/reviews/' + id, review);
                context.commit('UPDATE_REVIEW', response.data.review);
                return response;
            } catch (error) {
                return error;
            }
        },
        async deleteReview(context, id) {
            try {
                const response = await this.$axios.delete('/reviews/' + id);
                context.commit('DELETE_REVIEW', id);
                return response;
            } catch (error) {
                return error;
            }
        }
    }
}