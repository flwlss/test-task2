<template>
  <div class="header">
    <div class="container">
      <div class="header-align">
        <a class="header-logo" href="/">
          <img alt="logo" src="../assets/logo.svg"
        /></a>
        <li
          class="header-item"
          v-for="(menu, index) in headerList"
          :key="index"
        >
          <router-link :to="menu.path">{{ menu.name }}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
const menuList = [
  { name: "Электронный бланк ПТД", path: "/form" },
  { name: "Памятка путешественника", path: "/guide" },
  { name: "Информация", path: "/info" },
  { name: "Вопросы и поддержка", path: "/faq" },
  { name: "Личный кабинет", path: "/cabinet" },
];

export default {
  name: "Header",
  props: {},
  data() {
    return {
      headerList: menuList,
    };
  },
};
</script>