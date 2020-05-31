<template lang="pug" src="./works.pug"></template>
<style lang="pcss" scoped src="./works.pcss"></style>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapState, mapMutations } from 'vuex';
import { renderer } from '../../helpers/pictures';
import SvgIcon from '../SvgIcon';
import ImageCustom from '../ImageCustom';
import Work from './Work';

export default {
    components: {Work, SvgIcon, ImageCustom},
    data() {
        return {
            isAddFormActive: false,
            isUpdatingWork: false,
            form: {
                photo: {},
                title: '',
                link: '',
                desc: '',
                tags: ''
            },
            renderedImg: ''
        }
    },
    computed: {
        ...mapState({
            works: state => state.works.works,
            userId: state => state.user.user.id
        }),
        tagsSeparated() {
            return this.form.tags.split(',');
        }
    },
    validations: {
        form: {
            title: {required},
            link: {required},
            desc: {required},
            tags: {required},
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
        this.fetchWorks(this.userId);
    },
    methods: {
        ...mapActions('works', ['createWork', 'fetchWorks', 'updateWork']),
        clearForm() {
            this.renderedImg = '';
            this.form.photo = {};
            this.form.title = '';
            this.form.link = '';
            this.form.desc = '';
            this.form.tags = '';
            this.isAddFormActive = false;
            this.isUpdatingWork = false;
            this.$v.form.$reset();
        },
        async addWork() {
            this.$v.form.$touch();
            if (!this.$v.form.$anyError) {
                const formData = new FormData();

                if (typeof this.form.photo !== 'string') {
                    formData.append('photo', this.form.photo);
                } else {
                    let imgBlob = await this.$axios.get(this.form.photo);
                    console.log(imgBlob);
                }
                // formData.append('title', this.form.title);
                // formData.append('link', this.form.link);
                // formData.append('description', this.form.desc);
                // formData.append('techs', this.form.tags);

                // if (this.isUpdatingWork) {
                //     const response = await this.createWork(formData);
                // } else {
                //     const response = await this.updateWork({id: this.form.id,work: formData});
                // }
                
                // console.log(response);
                // if (response.status === 201) {
                //     this.clearForm();
                //     this.toast('success', 'Работа успешно добавлена');
                // } else if (response.status === 200) {
                //     this.clearForm();
                //     this.toast('success', 'Работа успешно обновлена');
                // } else {
                //     this.toast('error', 'Не удалось добавить работу');
                // }
            }
        },
        updateWork(work) {
            this.isUpdatingWork = true;
            this.isAddFormActive = true;
            this.form = {...work};
            this.renderedImg = this.$axios.defaults.baseURL + '/' + this.form.photo;
        },
        cancelAddForm() {
            this.isAddFormActive = false;
        },
        handleImgUpload(event) {
            const photo = event.target.files[0];
            this.form.photo = photo;
            renderer(photo).then(pic => {
                this.renderedImg = pic;
            });
            this.$v.form.photo.$touch();
        },
        removeTag(event) {
            const tagToDelete = event.currentTarget.getAttribute('data-tag');
            this.form.tags = this.tagsSeparated.filter(tag => tag.trim() !== tagToDelete.trim()).join(', ');
        }
    }
}
</script>