<template lang="pug">
.work.card
    .card-header
        .preview(:style="{background: `url(${fullImgPath}) no-repeat center center`, backgroundSize: 'cover'}")
        ul.tag-list
            li(:key="tag" v-for="tag in tagsSeparated").tag {{tag}}
    .card-content
        .work-title {{work.title}}
        .work-desc {{work.desc}}
        a(:href="work.link").work-link {{work.link}}
    .card-footer
        button(type="button" @click="updateWork").edit-work
            span Править
            SvgIcon(name="pencil" className="edit-work-icon")
        button(type="button" @click="removeWork").remove-work
            span Удалить
            SvgIcon(name="remove" className="remove-work-icon")
</template>
<style lang="pcss" scoped src="./works.pcss"></style>

<script>
import {mapActions, mapMutations} from 'vuex';
import SvgIcon from '../SvgIcon';

export default {
    components: {SvgIcon},
    props: {
        workProp: Object
    },
    computed: {
        tagsSeparated() {
            return this.work.tags.split(',');
        },
        fullImgPath() {
            return this.$axios.defaults.baseURL + `/${this.work.photo}`;
        },
        work() {
            return {
                id:    this.workProp.id,
                photo: this.workProp.photo,
                title: this.workProp.title,
                link:  this.workProp.link,
                desc:  this.workProp.description,
                tags:  this.workProp.techs
            }
        }
    },
    methods: {
        ...mapActions('works', ['deleteWork']),
        updateWork() {
            this.$emit('updateWork', {
                id:    this.work.id,
                photo: this.work.photo,
                title: this.work.title,
                link:  this.work.link,
                desc:  this.work.desc,
                tags:  this.work.tags
            });
        },
        async removeWork() {
            const response = await this.deleteWork(this.work.id);
            if (response.status === 200) {
                this.toast('success', 'Работа успешно удалена');
            } else {
                this.toast('error', 'Не удалось удалить работу');
            }
        }
    }
}
</script>