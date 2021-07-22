<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" src="../assets/mail.svg" />
    </div>
    <p class="index-title">Без регистрации</p>
    <p class="index-text">Введите адрес электронной почты</p>

    <form action="/confirm">
      <input
        class="index-input"
        type="email"
        v-model="email"
        placeholder="Введите email"
      />
      <button
        type="submit"
        :disabled="validateInput"
        class="disabled-btn"
        :class="{ 'enabled-btn': !validateInput }"
      >
        Продолжить
      </button>
    </form>
    <a class="index-login" href="">Вход через Госуслуги</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  computed: {
    validateInput() {
      return !this.email;
    },
  },
};
</script>