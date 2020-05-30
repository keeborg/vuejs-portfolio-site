<template lang="pug" src="./skill.pug"></template>
<style lang="pcss" scoped src="./skill.pcss"></style>

<script>
import { required, between } from 'vuelidate/lib/validators';
import { eventBus } from '../../../main.js';
import { mapActions } from 'vuex';
import SvgIcon from '../../SvgIcon';

export default {
    data() {
        return {
            editMode: false,
            skill: {
                id: this.skillProp.id,
                category: this.skillProp.category,
                title: this.skillProp.title,
                percent: this.skillProp.percent
            },
            skillCopy: {
                title: '',
                percent: 0
            }
        }
    },
    validations: {
        skill: {
            title: {required},
            percent: {
                required,
                between: between(1, 100)
            }
        }
    },
    props: ['skillProp'],
    components: {SvgIcon},
    methods: {
        ...mapActions('categories', ['deleteSkill']),
        editSkill() {
            this.skillCopy = {...this.skill};
            this.editMode = true;
        },
        saveSkill() {
            this.$v.skill.$touch();
            this.toast('success', 'Навык успешно добавлен');
        },
        saveSkillCancel() {
            this.skill = {...this.skillCopy};
            this.editMode = false;
        },
        async removeSkill() {
            const response = await this.deleteSkill({id: this.skill.id, categoryId: this.skill.category});
            if (response.status == 200) {
                this.toast('success', 'Скилл ' + this.skill.title + ' успешно удален');
            } else {
                this.toast('error', 'Не удалось удалить скилл');
            }
        }
    }
}
</script>