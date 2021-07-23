<template>
  <div class="header">
    <div class="header-align">
      <a class="header-logo" href="/">
        <img alt="logo" :src="require('@/assets/img/logo.svg')"
      /></a>
      <li class="header-item" v-for="(menu, index) in headerList" :key="index">
        <router-link :to="menu.path">{{ menu.name }}</router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {
      headerList: [
        { name: "Электронный бланк ПТД", path: "/form" },
        { name: "Памятка путешественника", path: "/guide" },
        { name: "Информация", path: "/info" },
        { name: "Вопросы и поддержка", path: "/faq" },
        { name: "Личный кабинет", path: "/cabinet" },
      ],
    };
  },
};
</script>