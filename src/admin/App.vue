<template lang="pug">
  .wrapper
    .header
      .container
        .avatar
          ImageCustom(path="content/user.jpg" alt="Аватар разработчика")
        .user-name Иван Кущев 
        .page-desc.tabs-phones-hidden Панель администрирования
        a(href="#").logout Выйти
    .nav
      .container
        ul.menu
          li.menu-item.active
            a(href="#").menu-link Обо мне
          li.menu-item
            a(href="#").menu-link Работы
          li.menu-item
            a(href="#").menu-link Отзывы
    .main
      .about
          .about-header.container
            h1.title Блок "Обо мне"
            button(type="button").add-btn.text
              .circle-add-btn
                SvgIcon(name="plus" className="add-btn-icon")
              | Добавить группу
          .about-content.container
            .card-list
              .card
                form.card-header
                  .card-header-title
                    input(type="text" placeholder="Название группы" required).category-input
                  .control-btns
                    button(type="submit").save-category
                      SvgIcon(name="tick" className="save-category-icon")
                    button(type="button").edit-category-cancel
                      SvgIcon(name="remove" className="edit-category-cancel-icon")
                    //- button(type="button").edit-category
                      SvgIcon(name="pencil" className="edit-category-icon")
                        button(type="button").remove-category
                          SvgIcon(name="trash" className="remove-category-icon")
                .card-content
                form.card-footer
                  input(type="text" placeholder="Новый навык" required).skill-input
                  .percent.input-wrapper
                    input(type="number" placeholder="0" min="0" max="100" required).percent-input
                    span.percent-sign %
                  button(type="submit").add-btn.medium.add-skill-btn
                    .circle-add-btn
                      SvgIcon(name="plus" className="add-btn-icon")
              
              .card
                form.card-header
                  .card-header-title
                    input(type="text" placeholder="Название группы" value="Workflow" required).category-input
                  .control-btns
                    button(type="submit").save-category
                      SvgIcon(name="tick" className="save-category-icon")
                    button(type="button").edit-category-cancel
                      SvgIcon(name="remove" className="edit-category-cancel-icon")
                    //- button(type="button").edit-category
                      SvgIcon(name="pencil" className="edit-category-icon")
                      button(type="button").remove-category
                        SvgIcon(name="trash" className="remove-category-icon")
                .card-content
                  table.skill-list
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Git" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="100" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                    
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Terminal" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="90" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                    
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Gulp" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="80" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                    
                    tr.skill-row
                      td.name 
                        input(type="text" readonly="readonly" value="Webpack" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="85" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                form.card-footer
                  input(type="text" placeholder="Новый навык" required).skill-input
                  .percent.input-wrapper
                    input(type="number" placeholder="0" min="0" max="100" required).percent-input
                    span.percent-sign %
                  button(type="submit").add-btn.medium.add-skill-btn
                    .circle-add-btn
                      SvgIcon(name="plus" className="add-btn-icon")
              
              .card
                form.card-header
                  .card-header-title
                    input(type="text" value="Frontend" readonly="readonly" placeholder="Название группы" required).category-input
                  .control-btns
                    //- button(type="submit").save-category
                    //-   SvgIcon(name="tick" className="save-category-icon")
                    //- button(type="button").edit-category-cancel
                    //-   SvgIcon(name="remove" className="edit-category-cancel-icon")
                    button(type="button").edit-category
                      SvgIcon(name="pencil" className="edit-category-icon")
                    button(type="button").remove-category
                      SvgIcon(name="trash" className="remove-category-icon")
                .card-content
                  table.skill-list
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Html5" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="100" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                    
                    tr.skill-row
                      td.name
                        input(type="text" value="CSS" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="90" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        //- button(type="button").edit-skill
                        //-   SvgIcon(name="pencil" className="edit-skill-icon")
                        //- button(type="button").remove-skill
                        //-   SvgIcon(name="trash" className="remove-skill-icon")
                        button(type="button").save-skill
                          SvgIcon(name="tick" className="save-skill-icon")
                        button(type="button").edit-skill-cancel
                          SvgIcon(name="remove" className="edit-skill-cancel-icon")
                    
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Javascript" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="85" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                    
                    tr.skill-row
                      td.name
                        input(type="text" readonly="readonly" value="Jquery & VueJS" placeholder="Название навыка" required).skill-input
                      td.percent-value
                        .percent.input-wrapper
                          input(type="number" value="80" readonly="readonly" placeholder="0" min="0" max="100" required).percent-input
                          span.percent-sign %
                      td.control-btns
                        button(type="button").edit-skill
                          SvgIcon(name="pencil" className="edit-skill-icon")
                        button(type="button").remove-skill
                          SvgIcon(name="trash" className="remove-skill-icon")
                form.card-footer
                  input(type="text" placeholder="Новый навык" required).skill-input
                  .percent.input-wrapper
                    input(type="number" placeholder="0" min="0" max="100" required).percent-input
                    span.percent-sign %
                  button(type="submit").add-btn.medium.add-skill-btn
                    .circle-add-btn
                      SvgIcon(name="plus" className="add-btn-icon")
      
      .works
        .works-header.container
          h1.title Блок "Работы"
        .works-content.container
          .work-form-wrapper
            form.card
              .card-header Редактирование работы
              .card-content
                .left
                  .upload-wrapper
                    .upload-content
                      span Перетащите или загрузите для загрузки изображения
                      button(type="button").gradient-btn.upload-btn Загрузить
                  //- .preview-wrapper
                  //-   .work-image-wrapper
                  //-     ImageCustom(path="content/slider-1.jpg" className="work-image")
                  //-   button(type="button").change-work-image.text-btn Изменить превью
                .right
                  .work-form
                    .input__wrapper
                      .input__title Название
                      .input__block
                        input(type="text" placeholder="Название работы" required).input__text-type.input.work-title-input
                    .input__wrapper
                      .input__title Ссылка
                      .input__block
                        input(type="text" placeholder="Ссылка на работу" required).input__text-type.input.work-link-input
                    .input__wrapper
                      .input__title Описание
                      .input__block
                        textarea(type="textarea" rows="2" placeholder="Описание работы" required).input__textarea-type.input.work-desc-input
                    .input__wrapper
                      .input__title Добавление тэга
                      .input__block
                        input(type="text" placeholder="Названия тэгов через запятую").input__text-type.input.tag-input
                    ul.tag-list
                      li.tag
                        span HTML
                        button(type="button").remove-tag
                          SvgIcon(name="remove" className="remove-tag-icon")
                      li.tag
                        span CSS
                        button(type="button").remove-tag
                          SvgIcon(name="remove" className="remove-tag-icon")
                      li.tag
                        span JavaScript
                        button(type="button").remove-tag
                          SvgIcon(name="remove" className="remove-tag-icon")
              .card-footer
                button(type="button").create-work-cancel-btn.text-btn Отмена
                button(type="submit").gradient-btn.create-work-btn Сохранить
          
          .works-list.card-list
            
            button(type="button").add-work.work.card
              .card-content
                .circle-add-btn
                  SvgIcon(name="plus" className="add-btn-icon")
                | Добавить работу
                
            .work.card
              .card-header
                ImageCustom(path="content/slider-1.jpg" className="preview")
                ul.tag-list
                  li.tag HTML
                  li.tag CSS
                  li.tag JavaScript
              .card-content
                .work-title Сайт школы образования
                .work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work-link http://loftschool.com
              .card-footer
                button(type="button").edit-work
                  span Править
                  SvgIcon(name="pencil" className="edit-work-icon")
                button(type="button").remove-work
                  span Удалить
                  SvgIcon(name="remove" className="remove-work-icon")

            .work.card
              .card-header
                ImageCustom(path="content/slider-2.jpg" className="preview")
              .card-content
                .work-title Сайт школы образования
                .work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work-link http://loftschool.com
              .card-footer
                button(type="button").edit-work
                  span Править
                  SvgIcon(name="pencil" className="edit-work-icon")
                button(type="button").remove-work
                  span Удалить
                  SvgIcon(name="remove" className="remove-work-icon")

            .work.card
              .card-header
                ImageCustom(path="content/slider-3.jpg" className="preview")
              .card-content
                .work-title Сайт школы образования
                .work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work-link http://loftschool.com
              .card-footer
                button(type="button").edit-work
                  span Править
                  SvgIcon(name="pencil" className="edit-work-icon")
                button(type="button").remove-work
                  span Удалить
                  SvgIcon(name="remove" className="remove-work-icon")

            .work.card
              .card-header
                ImageCustom(path="content/slider-4.jpg" className="preview")
              .card-content
                .work-title Сайт школы образования
                .work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work-link http://loftschool.com
              .card-footer
                button(type="button").edit-work
                  span Править
                  SvgIcon(name="pencil" className="edit-work-icon")
                button(type="button").remove-work
                  span Удалить
                  SvgIcon(name="remove" className="remove-work-icon")
      .reviews
        .reviews-header.container
          h1.title Блок "Отзывы"
        .reviews-content.container
          .review-form-wrapper
            form.card
              .card-header Новый отзыв
              .card-content
                .left
                  .avatar-wrapper
                    .review-avatar
                      SvgIcon(name="user" className="avatar-icon")
                  button(type="button").text-btn.add-avatar-btn Добавить фото
                .right
                  .review-form
                    .author-inputs
                      .input__wrapper
                        .input__title Имя автора
                        .input__block
                          input(type="text" placeholder="Введите имя автора" required).input__text-type.input.author-name-input
                      .input__wrapper
                        .input__title Должность автора
                        .input__block
                          input(type="text" placeholder="Введите должность автора" required).input__text-type.input.author-position-input
                    .input__wrapper
                      .input__title Отзыв
                      .input__block
                        textarea(type="textarea" rows="2" placeholder="Введите отзыв" required).input__textarea-type.input.review-text-input
                    
              .card-footer
                button(type="button").create-review-cancel-btn.text-btn Отмена
                button(type="submit").gradient-btn.create-review-btn Сохранить
          
          .reviews-list.card-list
            
            button(type="button").add-review.review.card
              .card-content
                .circle-add-btn
                  SvgIcon(name="plus" className="add-btn-icon")
                | Добавить отзыв
                
            .review.card
              .card-header
                .avatar
                  ImageCustom(path="content/user.jpg" className="avatar-small-img")
                .author-name Владимир Сабанцев
                .author-position Преподаватель
              .card-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на слишком старых браузерах.
              .card-footer
                button(type="button").edit-review
                  span Править
                  SvgIcon(name="pencil" className="edit-review-icon")
                button(type="button").remove-review
                  span Удалить
                  SvgIcon(name="remove" className="remove-review-icon")
            
            .review.card
              .card-header
                .avatar
                  ImageCustom(path="content/user.jpg" className="avatar-small-img")
                .author-name Владимир Сабанцев
                .author-position Преподаватель
              .card-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на слишком старых браузерах.
              .card-footer
                button(type="button").edit-review
                  span Править
                  SvgIcon(name="pencil" className="edit-review-icon")
                button(type="button").remove-review
                  span Удалить
                  SvgIcon(name="remove" className="remove-review-icon")
            
            .review.card
              .card-header
                .avatar
                  ImageCustom(path="content/user.jpg" className="avatar-small-img")
                .author-name Владимир Сабанцев
                .author-position Преподаватель
              .card-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на слишком старых браузерах.
              .card-footer
                button(type="button").edit-review
                  span Править
                  SvgIcon(name="pencil" className="edit-review-icon")
                button(type="button").remove-review
                  span Удалить
                  SvgIcon(name="remove" className="remove-review-icon")
            
            .review.card
              .card-header
                .avatar
                  ImageCustom(path="content/user.jpg" className="avatar-small-img")
                .author-name Владимир Сабанцев
                .author-position Преподаватель
              .card-content Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на слишком старых браузерах.
              .card-footer
                button(type="button").edit-review
                  span Править
                  SvgIcon(name="pencil" className="edit-review-icon")
                button(type="button").remove-review
                  span Удалить
                  SvgIcon(name="remove" className="remove-review-icon")
            
            
           
</template>

<script>
import SvgIcon from './components/SvgIcon';
import ImageCustom from './components/ImageCustom';

export default {
  data() {
    return {}
  },
  components: {SvgIcon, ImageCustom}
}
</script>


<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/responsive-helpers.pcss";
  .maincontent, .wrapper {
    height: 100%;
    overflow-y: auto;
  }
  .maincontent {
    background: url("../images/mountain_baloon.jpg") no-repeat center center;
    background-size: cover;
  }
</style>
<style lang="postcss" scoped>
  
  @import "../styles/mixins.pcss";
  @import "../styles/blocks/tag-list.pcss";
  @import "../styles/blocks/input.pcss";

.main {
  width: 100%;
  min-height: 100%;
  padding-top: 60px;
  background-color: rgba(246, 250, 255, 0.93);
}

.card-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  background-color: #fff;
  min-width: 48%;
  min-height: 390px;
  padding: 30px 20px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px rgba(199, 199, 199, 0.6);
  display: flex;
  flex-direction: column;
  .card-header {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    padding: 0 10px 15px 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    .card-header-title {
      font-size: 18px;
      font-weight: 600;
    }
  }
  .card-content {
    flex-grow: 1;
  }
  .card-footer {
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
  }
}

input {
  line-height: 1.3;
  font-weight: 600;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #000;
  &::placeholder {
    font-weight: 600;
    opacity: 0.6;
  }
  &[readonly="readonly"] {
      outline: none;
    border-bottom: none;
    font-weight: normal;
  }
}

.input-wrapper {
  position: relative;
  display: flex;
}

.percent {
  position: relative;
  .percent-sign {
    position: absolute;
    right: 0;
  }

  .percent-input {
    padding: 0 20px 10px 10px;
    max-width: 65px;
    &[readonly="readonly"] {
      outline: none;
      border-bottom: none;
      font-weight: normal;
    }
  }

  .percent-input + .percent-sign {
    transform: translate(-30%, 20%);
  }
  /* Chrome, Safari, Edge, Opera */
  .percent-input::-webkit-outer-spin-button,
  .percent-input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  .percent-input[type=number] {
    appearance: textfield;
  }
}

/*===== Buttons start =====*/
.add-btn {
  &:hover {
    color: #26288c;
    .circle-add-btn {
      background-image: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
    }
  }

  &:active {
    .circle-add-btn {
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    }
  }
}

.add-btn.text {
  color: $text-color-active;
  font-weight: 600;
  display: flex;
  &:hover {
    color: #26288c;
  }
  &:active {
    color: $text-color-active;
  }
}

.circle-add-btn {
  position: relative;
  min-width: 20px;
  min-height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  .add-btn-icon {
    fill: #fff;
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.add-btn.medium {
  display: block;
  padding: 0;
  width: 40px;
  height: 40px;
  .circle-add-btn {
    width: 100%;
    height: 100%;
    margin: 0;
    .add-btn-icon {
      width: 20px;
      height: 20px;
    }
  }
}

.gradient-btn,
.gradient-btn[type="submit"] {
  color: #fff;
  padding: 15px 45px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  border-radius: 25px;
  &:hover {
    background-image: linear-gradient(to right, #3f35cb 0%, #006aed 100%);
  }
  &:active {
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
}

.text-btn {
  color: $text-color-active;
  font-weight: 600;
  &:hover {
    color: #000;
  }
}

button[type="submit"] {
  background: transparent;
}
/*===== Buttons end =====*/

/*===== Header start =====*/
.header {
  padding: 10px 0;
  background-color: #3e3e59;
  color: #fff;

  .container {
    display: grid;
    grid-template-columns: min-content 180px 210px repeat(9, 1fr);
    grid-template-rows: 1fr 1fr;
    
  }
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  grid-column: 1/2;
  grid-row: 1/3;
  align-self: center;
  justify-self: center;
  width: 45px;
  height: 45px;
  min-width: 45px;
  max-height: 45px;
  margin-right: 15px;
  overflow: hidden;
  border-radius: 50%;
}

.user-name {
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: center;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  @include tabs-phones {
    grid-column: 2/4;
    grid-row: 1/2;
    text-align: start;
  }
}

.page-desc {
  grid-column: 3/5;
  grid-row: 1/3;
  align-self: center;
  font-size: 14px;
  opacity: 0.5;
}

.logout {
  grid-column: 12/13;
  grid-row: 1/3;
  align-self: center;
  justify-self: center;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.4;
  }
  @include tabs-phones {
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: start;
  }
}
/*===== Header end =====*/

/*===== Nav start =====*/
.nav {
  width: 100%;
  background-color: #fff;
}

.menu {
  display: flex;
}

.menu-item {
  padding: 20px 30px;

  .menu-link {
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: $text-color-light;
    font-weight: 600;
    &:hover {
      color: $text-color-active;;
    }
  }

  &.active {
    border-bottom: 4px solid $text-color-active;
    .menu-link {
      color: $text-color-active;
    }
  }
  @include tabs-phones {
    padding: 25px 15px;
  }
}
/*===== Nav end =====*/

/*===== About start =====*/

.card-header {
  .card-header-title {
    flex: 1;
  }
}

.about {
  @include tablets-650 {
    .about-content.container {
      width: 100%;
      margin: 0;
    }
  }
}

.about-header {
  display: flex;
  margin-bottom: 60px;

  .title {
    font-size: 21px;
    font-weight: 700;
    margin-right: 60px;
  }
  @include tablets-650 {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    .title {
      margin-bottom: 30px;
    }
    .add-btn.text {
      padding: 0;
    }
  }
}

.about-content {
  .card-content {
    display: flex;
    flex-direction: column;
  }
  .card {
    @include tablets {
      width: 30%;
    }
    @include tablets-650 {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

.category-input {
  width: 250px;
  &[readonly="readonly"] {
    font-weight: 600;
  }
  @include tablets {
    width: 160px;
  }
}

.percent {
  margin-left: 15px;
}

.add-skill-btn {
  margin-left: 30px;
  @include desktop-tabs {
    margin-left: 20px;
  }
}

.control-btns {
  display: flex;
  justify-self: flex-end;
}

.save-category,
.edit-category-cancel,
.remove-category,
.save-skill,
.edit-skill-cancel {
  display: block;
  padding: 0;
  width: 15px;
  height: 12px;
  .edit-category-cancel-icon, 
  .edit-skill-cancel-icon {
    fill: #bf2929;
  }
  .save-skill-icon,
  .save-category-icon {
    fill: #00d70a;
  }
}

.edit-category-cancel,
.remove-category,
.edit-skill-cancel {
  margin-left: 20px;
}

.edit-skill,
.remove-skill,
.edit-category,
.remove-category {
  width: 16px;
  height: 15px;
  padding: 0;
  svg {
    fill: $text-color-light;
    opacity: 0.5;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
  &:active {
    svg {
      opacity: 0.8;
    }
  }
}

.remove-skill {
  margin-left: 20px;
}

.skill-row {
  td {
    font-weight: 400;
    padding: 10px 5px;
  }
  .name {
    width: 65%;
    .skill-input {
      width: 100%;
    }
  }
  .percent-value {
    width: 50px;
    position: relative;
    .percent {
      margin: 0;
    }
    .percent-input + .percent-sign {
      transform: translate(-30%, 0);
    }
  }
  .control-btns {
    justify-content: flex-end;
  }
  
}

.skill-input {
  padding-left: 10px;
  @include tablets {
    width: 135px;
  }
}
/*===== About end =====*/

/*===== Works start =====*/

.works-content.container {
  @include tablets-650 {
    width: 100%;
    margin: 0;
  }
}

.works-header {
  display: flex;
  margin-bottom: 60px;

  .title {
    font-size: 21px;
    font-weight: 700;
    margin-right: 60px;
  }
  @include tablets-650 {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    .title {
      margin-bottom: 30px;
    }
    .add-btn.text {
      padding: 0;
    }
  }
}

.works-list {
  flex-wrap: wrap;
  justify-content: normal;
}

.work {
  margin-right: 10px;
  width: 30%;
  margin-right: 3%;
  min-width: 150px;
  padding: 0;
  &:last-child {
    margin-right: 0;
  }

  .card-header {
    padding: 0;
    position: relative;
    max-height: 270px;
    .tag-list {
      position: absolute;
      right: 10px;
      bottom: 0;
      .tag {
        
        font-size: 13px;
        padding: 5px 10px;
      }
    }
  }

  .card-content {
    padding: 0 20px;
    .work-title {
      font-size: 18px;
      font-weight: 700;
      margin: 10px 0;
    }
    .work-desc {
      color: $text-color-light;
      opacity: 0.7;
      font-weight: 600;
    }
    .work-link {
      display: block;
      color: $text-color-active;
      font-weight: 600;
      text-decoration: none;
      margin: 20px 0 10px 0;
    }
  }

  .card-footer {
    width: 100%;
    padding: 20px 20px 30px 20px;
    .edit-work,
    .remove-work {
      display: flex;
      color: $text-color-light;
      font-weight: 600;
      span {
        opacity: 0.6;
      }
      .edit-work-icon {
        width: 17px;
        margin-left: 10px;
        fill: $text-color-active;
      }
      .remove-work-icon {
        width: 17px;
        margin-left: 10px;
        fill: #bf2929;
      }
    }
    .edit-work {
      margin-right: auto;
      justify-content: flex-start;
    }
    .remove-work {
      margin-left: auto;
      justify-content: flex-end;
    }
    @include desktop-tabs {
      padding: 10px 10px 30px 10px;
    }
  }
  @include tablets {
    width: 49%;
    margin-right: 2%;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
  @include tabs-phones {
    width: 100%;
    min-height: 550px;
    margin-right: 2%;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

.add-work {
  position: relative;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 70%);
  .card-content {
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
    max-width: 195px;
    display: flex;
    flex-direction: column;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include tabs-phones {
      width: 100%;
      max-width: 100%;
      flex-direction: row;
      align-items: center;
    }
  }
  .circle-add-btn {
    width: 155px;
    height: 155px;
    margin-right: 0;
    margin-bottom: 30px;
    background: transparent;
    border: 2px solid #fff;
    .add-btn-icon {
      width: 20%;
    }
    @include tabs-phones {
      width: 70px;
      height: 70px;
      margin-bottom: 0;
      margin-right: 40px;
    }
  }
  @include tabs-phones {
    width: 100%;
    height: 150px;
    min-height: 150px;
    margin-right: 0;
  }
}

.work-form-wrapper {
  width: 100%;
  background-color: #fff;
  .card-content {
    display: flex;
    .left {
      padding: 10px;
      flex: 1;
    }
    .right {
      padding: 10px;
      flex: 1;
    }
    @include tablets {
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
    }
  }
  .card-footer {
    @include tablets {
      width: 100%;
      justify-content: center;
    }
  }
}

.upload-wrapper {
  position: relative;
  width: 100%;
  min-height: 300px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  .upload-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    span {
      display: block;
      font-weight: 600;
      opacity: 0.5;
      margin-bottom: 20px;
    }
  }
}

.work-image-wrapper {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  .work-image {
    position: absolute;
    width: 100%;
    max-height: 900px;
  }
}

.preview-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .change-work-image {
    margin-top: 30px;
  }
}

.work-form {
  margin-bottom: 20px;
  .tag {
    padding: 5px 10px 5px 10px;
    display: flex;
    span {
      font-size: 13px;
      font-weight: 600;
    }
    .remove-tag {
      margin-left: 10px;
      width: 10px;
      height: 10px;
      padding: 0;
      svg {
        opacity: 0.5;
        fill: #000;
        width: 10px;
        height: 10px;
      }
    }
  }
}

.create-work-cancel-btn {
  margin-right: 40px;
}

.input__wrapper {
  margin-bottom: 30px;
  .input__title {
    margin-left: 0;
    margin-bottom: 5px;
  }
  .input {
    font-size: 16px;
    padding-left: 0;
    padding-bottom: 10px;
    font-weight: 600;
  }
  .input__textarea-type {
    margin-top: 10px;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 10px;
  }
  .input::placeholder {
    font-size: 16px;
    opacity: 0.6;
  }
}
/*===== Works end =====*/

/*===== Reviews start =====*/
.reviews-content.container {
  @include tablets-650 {
    width: 100%;
    margin: 0;
  }
}

.reviews-header {
  display: flex;
  margin-bottom: 60px;

  .title {
    font-size: 21px;
    font-weight: 700;
    margin-right: 60px;
  }
  @include tablets-650 {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    .title {
      margin-bottom: 30px;
    }
  }
}

.reviews-list {
  flex-wrap: wrap;
  justify-content: normal;
}

.review {
  margin-right: 10px;
  width: 30%;
  margin-right: 3%;
  min-width: 150px;
  padding: 0;
  &:last-child {
    margin-right: 0;
  }

  .card-header {
    display: grid;
    grid-template-columns: 3;
    grid-template-rows: 2;
    padding: 20px;
    .avatar {
      width: 45px;
      height: 45px;
      grid-column: 1/2;
      grid-row: 1/3;
    }
    .author-name {
      font-size: 18px;
      font-weight: 700;
      grid-column: 2/4;
      grid-row: 1/2;
    }
    .author-position {
      font-size: 16px;
      font-weight: 600;
      opacity: 0.5;
      grid-column: 2/4;
      grid-row: 2/3;
    }
  }

  .card-content {
    padding: 10px 20px;
    font-weight: 600;
    opacity: 0.7;
  }

  .card-footer {
    width: 100%;
    padding: 20px 20px 30px 20px;
    .edit-review,
    .remove-review {
      display: flex;
      color: $text-color-light;
      font-weight: 600;
      span {
        opacity: 0.6;
      }
      .edit-review-icon {
        width: 17px;
        margin-left: 10px;
        fill: $text-color-active;
      }
      .remove-review-icon {
        width: 17px;
        margin-left: 10px;
        fill: #bf2929;
      }
    }
    .edit-review {
      margin-right: auto;
      justify-content: flex-start;
    }
    .remove-review {
      margin-left: auto;
      justify-content: flex-end;
    }
    @include desktop-tabs {
      padding: 30px 10px 30px 10px;
    }
  }
  @include tablets {
    width: 49%;
    margin-right: 2%;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
  @include tabs-phones {
    width: 100%;
    min-height: 250px;
    margin-right: 2%;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

.add-review {
  position: relative;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 70%);
  .card-content {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
    max-width: 195px;
    display: flex;
    flex-direction: column;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include tabs-phones {
      width: 100%;
      max-width: 100%;
      flex-direction: row;
      align-items: center;
    }
  }
  .circle-add-btn {
    width: 155px;
    height: 155px;
    margin-right: 0;
    margin-bottom: 30px;
    background: transparent;
    border: 2px solid #fff;
    .add-btn-icon {
      width: 20%;
    }
    @include tabs-phones {
      width: 70px;
      height: 70px;
      margin-bottom: 0;
      margin-right: 40px;
    }
  }
  @include tabs-phones {
    width: 100%;
    height: 150px;
    min-height: 150px;
    margin-right: 0;
  }
}

.review-form-wrapper {
  width: 100%;
  background-color: #fff;
  .card-content {
    display: flex;
    padding-right: 150px;
    .left {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
    .right {
      padding: 10px;
      flex: 3;
      @include tabs-phones {
        width: 100%;
      }
    }
    @include tablets {
      padding-right: 50px;
    }
    @include tablets-650 {
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0 auto;
    }
  }
  .card-footer {
    padding-right: 150px;
    @include tablets {
      width: 100%;
      justify-content: center;
      padding-right: 50px;
    }
    @include tablets-650 {
      padding: 0;
    }
  }
}

.avatar-wrapper {
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #dee4ed;
  border-radius: 50%;
  .avatar-icon {
    fill: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include desktop-tabs {
    width: 150px;
    height: 150px;
  }
  @include tablets {
    width: 120px;
    height: 120px;
  }
}

.review-form {
  margin-bottom: 20px;

}

.create-review-cancel-btn {
  margin-right: 40px;
}

.review-form {
  .input__wrapper {
    margin-bottom: 30px;
    .input__title {
      margin-left: 0;
      margin-bottom: 5px;
    }
    .input {
      min-width: 250px;
      font-size: 16px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 10px;
      font-weight: 600;
      @include tablets {
        min-width: 220px;
      }
    }
    .input__textarea-type {
      width: 100%;
      margin-top: 10px;
      border: 1px solid rgba(0,0,0,0.3);
      padding: 10px;
    }
    .input::placeholder {
      font-size: 16px;
      opacity: 0.6;
    }
  }
  .author-inputs {
    display: flex;
    .input__wrapper:nth-child(1) {
      margin-right: 20px;
    }
    @include tabs-phones {
      flex-direction: column;
    }
  }
}

.add-avatar-btn {
  margin-top: 20px;
}
/*===== Reviews end =====*/
</style>