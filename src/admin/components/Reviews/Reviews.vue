<template lang="pug" src="./reviews.pug"></template>
<style lang="pcss" scoped src="./reviews.pcss"></style>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapState, mapMutations } from 'vuex';
import { renderer } from '../../helpers/pictures';
import SvgIcon from '../SvgIcon';
import Review from './Review';

export default {
    components: {SvgIcon, Review},
    data() {
        return {
            isAddFormActive: false,
            isUpdatingReview: false,
            form: {
                photo: {},
                name: '',
                position: '',
                review: ''
            },
            renderedImg: ''
        }
    },
    computed: {
        ...mapState({
            reviews: state => state.reviews.reviews,
            userId: state => state.user.user.id
        })
    },
    validations: {
        form: {
            name: {required},
            position: {required},
            review: {required},
            photo: {
                required,
                filesize(value) {
                    const filesize = (this.form.photo.size/1024/1024).toFixed(4);
                    if (this.form.photo.size !== undefined) {
                        return filesize < 1.5;
                    }
                    return true;
                }
            }
        }
    },
    created() {
        this.fetchReviews(this.userId);
    },
    methods: {
        ...mapActions('reviews', ['createReview', 'fetchReviews', 'updateReview']),
        clearForm() {
            this.renderedImg = '';
            this.form.photo = {};
            this.form.name = '';
            this.form.position = '';
            this.form.review = '';
            this.$v.form.$reset();
        },
        async addReview() {
            this.$v.form.$touch();
            if (!this.$v.form.$anyError) {
                const formData = new FormData();

                formData.append('photo', this.form.photo);
                formData.append('author', this.form.name);
                formData.append('occ', this.form.position);
                formData.append('text', this.form.review);

                let response = null;
                if (!this.isUpdatingReview) {
                    response = await this.createReview(formData);
                } else {
                    response = await this.updateReview({id: this.form.id, review: formData});
                }
                
                if (response.status === 201) {
                    this.clearForm();
                    this.isAddFormActive = false;
                    this.toast('success', 'Отзыв успешно добавлен');
                } else if (response.status === 200) {
                    this.toast('success', 'Отзыв успешно обновлен');
                    this.clearForm();
                    this.isAddFormActive = false;
                    this.isUpdatingReview = false;
                } else {
                    this.toast('error', 'Не удалось добавить отзыв');
                }
            }
        },
        changeReview(review) {
            this.isUpdatingReview = true;
            this.isAddFormActive = true;
            this.form = {...review};
            this.renderedImg = this.$axios.defaults.baseURL + '/' + this.form.photo;
        },
        cancelAddForm() {
            this.clearForm();
            this.isAddFormActive = false;
            this.isUpdatingReview = false;
        },
        handleImgUpload(event) {
            const photo = event.target.files[0];
            this.form.photo = photo;
            renderer(photo).then(pic => {
                this.renderedImg = pic;
            });
            this.$v.form.photo.$touch();
        }
    },
    updated() {
        if (this.isAddFormActive) {
            this.$refs.form.scrollIntoView();
        }
    }
}
</script>