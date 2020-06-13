<template lang="pug">
.review.card
    .card-header
        .avatar(:style="{background: `url(${fullImgPath}) no-repeat center center`, backgroundSize: 'cover'}")
        .author-name {{review.name}}
        .author-position {{review.position}}
    .card-content {{review.review}}
    .card-footer
        button(type="button" @click="updateReview").edit-review
            span Править
            SvgIcon(name="pencil" className="edit-review-icon")
        button(type="button" @click="removeReview").remove-review
            span Удалить
            SvgIcon(name="remove" className="remove-review-icon")
</template>
<style lang="pcss" scoped src="./reviews.pcss"></style>

<script>
import {mapActions} from 'vuex';
import SvgIcon from '../SvgIcon';

export default {
    components: {SvgIcon},
    props: {
        reviewProp: Object
    },
    computed: {
        fullImgPath() {
            return this.$axios.defaults.baseURL + `/${this.review.photo}`;
        },
        review() {
            return {
                id:       this.reviewProp.id,
                photo:    this.reviewProp.photo,
                name:     this.reviewProp.author,
                position: this.reviewProp.occ,
                review:   this.reviewProp.text
            }
        }
    },
    methods: {
        ...mapActions('reviews', ['deleteReview']),
        updateReview() {
            this.$emit('updateReview', {
                id:       this.review.id,
                photo:    this.review.photo,
                name:     this.review.name,
                position: this.review.position,
                review:   this.review.review
            });
        },
        async removeReview() {
            const response = await this.deleteReview(this.review.id);
            if (response.status === 200) {
                this.toast('success', 'Отзыв успешно удален');
            } else {
                this.toast('error', 'Не удалось удалить отзыв');
            }
        }
    }
}
</script>