<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" src="../assets/mail.svg" />
    </div>
    <p class="index-title">Без регистрации</p>
    <p class="index-text">Введите адрес электронной почты</p>

    <form id="app" @submit="checkForm" action="/confirm">
      <input
        class="index-input"
        type="email"
        name="name"
        v-model="name"
        placeholder="Введите email"
      />
      <input type="submit" value="Продолжить" class="index-continue" />
    </form>

    <a class="index-login" href="">Вход через Госуслуги</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name) return true;
      if (!this.name) alert("Введите email");
      e.preventDefault();
    },
  },
};
</script>