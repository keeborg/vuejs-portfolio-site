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
      .container
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
  }
  .maincontent {
    background: url("../images/mountain_baloon.jpg") no-repeat center center;
    background-size: cover;
  }
</style>
<style lang="postcss" scoped>
  
  @import "../styles/mixins.pcss";

.main {
  width: 100%;
  min-height: 100%;
  background-color: rgba(246, 250, 255, 0.93);
}

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
}
/*===== Nav end =====*/

/*===== About start =====*/

/*===== About end =====*/
  
</style>