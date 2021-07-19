<template>
  <div class="nav">
    <div class="container">
      <div class="nav-align">
        <div class="nav-wrapper">
          <a class="nav-logo" href="/">
            <img alt="logo" src="../assets/logo.svg"
          /></a>
          <li class="nav-item" v-for="(menu, index) in headerList" :key="index">
            <router-link class="nav-link" :to="menu.path">{{
              menu.name
            }}</router-link>
          </li>
        </div>
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