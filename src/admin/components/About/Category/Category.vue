<template lang="pug" src="./category.pug"></template>
<style lang="pcss" scoped src="./category.pcss"></style>

<script>
import { required, between } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import {eventBus} from '../../../main';
import SvgIcon from '../../SvgIcon';
import Skill from '../Skill/Skill';

export default {
    data() {
        return {
            editMode: false,
            category: {
                id: this.cat.id,
                title: this.cat.category,
                titleCopy: '',
                skills: this.cat.skills
            },
            skillToAdd: {
                title: '',
                percent: 0
            }
        }
    },
    props: {
        cat: Object
    },
    components: {SvgIcon, Skill},
    validations: {
        category: {
            title: {required}
        },
        skillToAdd: {
            title: {required},
            percent: {
                required,
                between: between(1, 100)
            }
        }
    },
    created() {
        this.editMode = this.category.title === '';
    },
    methods: {
        ...mapActions('categories', ['addCategory', 'updateCategory', 'deleteCategory', 'addSkill']),
        editCategory() {
            this.category.titleCopy = this.category.title;
            this.editMode = true;
        },
        async saveCategory() {
            this.$v.category.$touch();
            if (!this.$v.category.$anyError) {
                if (this.category.titleCopy === '') { // creation of a new one
                    const response = await this.addCategory(this.category);
                    if (response.status == 201) {
                        this.editMode = false;
                        this.toast('success', 'Категория ' + this.category.title + ' успешно добавлена');
                    } else {
                        this.toast('error', 'Не удалось добавить категорию');
                    }
                    eventBus.$emit('created');
                } else { // updating of an existing one
                    const response = await this.updateCategory({id: this.category.id, title: this.category.title});
                    if (response.status == 200) {
                        this.editMode = false;
                        this.toast('success', 'Категория успешно обновлена');
                    } else {
                        this.toast('error', 'Не удалось обновить категорию');
                    }
                }
            }
        },
        cancelSaveCategory() {
            if (this.category.titleCopy !== '') {
                this.category.title = this.category.titleCopy;
                this.$v.category.$reset();
                this.editMode = false;
            } else {
                this.category.title = this.category.titleCopy;
                this.$v.category.$touch();
            }
        },
        async removeCategory() {
            const response = await this.deleteCategory(this.category.id);
            if (response.status == 200) {
                this.toast('success', 'Категория ' + this.category.title + ' успешно удалена');
            } else {
                this.toast('error', 'Не удалось удалить категорию');
            }
        },
        async createSkill() {
            if (this.category.titleCopy === '' && this.editMode) {
                this.toast('info', 'Чтобы добавить скилл, сохраните категорию');
            } else {
                await this.$v.skillToAdd.$touch();
                if (!this.$v.skillToAdd.$anyError) {
                    let response = await this.addSkill({category: this.category.id, ...this.skillToAdd});
                    if (response.status == 201) {
                        this.toast('success', 'Скилл успешно добавлен');
                        this.skillToAdd.title = '';
                        this.skillToAdd.percent = 0;
                        this.$v.skillToAdd.$reset();
                    } else {
                        this.toast('error', 'Не удалось добавить скилл');
                    }
                }
            }
        }
    }
}
</script>