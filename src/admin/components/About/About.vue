<template lang="pug" src="./about.pug"></template>
<style lang="pcss" scoped src="./about.pcss"></style>

<script>
import { eventBus } from '../../main.js';
import { mapActions, mapState, mapMutations } from 'vuex';
import SvgIcon from '../SvgIcon';
import Category from './Category/Category';

export default {
    data() {
        return {
            isAddFormActive: false,
            emptyCategory: {
                id: -1,
                category: '',
                created_at: '',
                updated_at: '',
                user_id: '',
                skills: []
            }
        }
    },
    computed: {
        ...mapState({
            categories: state => state.categories.categories,
            userId: state => state.user.user.id
        })
    },
    components: {SvgIcon, Category},
    created() {
        this.fetchCategories(this.userId);
        eventBus.$on('created', () => {
            this.isAddFormActive = false;
        });
    },
    methods: {
        ...mapMutations(['ADD_EMPTY_CATEGORY']),
        ...mapActions('categories', ['fetchCategories']),
        addCategoryCard() {
            if (this.isAddFormActive) {
                this.toast('info', 'Форма добавления категории уже открыта');
            } else {
                this.isAddFormActive = true;
                this.$store.commit('categories/ADD_EMPTY_CATEGORY', this.emptyCategory);
            }
        }
    }
}
</script>