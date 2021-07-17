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
import { menuList } from "../constants/menuLinks";

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
