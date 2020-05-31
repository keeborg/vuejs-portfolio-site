<template lang="pug">
.work.card
    .card-header
        .preview(:style="{background: `url(${fullImgPath}) no-repeat center center`}")
        ul.tag-list
            li(:key="tag" v-for="tag in tagsSeparated").tag {{tag}}
    .card-content
        .work-title {{title}}
        .work-desc {{desc}}
        a(:href="link").work-link {{link}}
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
import ImageCustom from '../ImageCustom';

export default {
    components: {SvgIcon, ImageCustom},
    data() {
        return {
            id:    this.work.id,
            photo: this.work.photo,
            title: this.work.title,
            link:  this.work.link,
            desc:  this.work.description,
            tags:  this.work.techs
        }
    },
    props: ['work'],
    computed: {
        tagsSeparated() {
            return this.tags.split(',');
        },
        fullImgPath() {
            return this.$axios.defaults.baseURL + `/${this.photo}`;
        }
    },
    methods: {
        ...mapMutations(['DELETE_WORK']),
        ...mapActions('works', ['deleteWork']),
        updateWork() {
            this.$emit('updateWork', {
                id:    this.id,
                photo: this.photo,
                title: this.title,
                link:  this.link,
                desc:  this.desc,
                tags:  this.tags
            });
        },
        async removeWork() {
            const response = await this.deleteWork(this.id);
            if (response.status === 200) {
                this.toast('success', 'Работа успешно удалена');
            } else {
                this.toast('error', 'Не удалось удалить работу');
            }
        }
    }
}
</script>