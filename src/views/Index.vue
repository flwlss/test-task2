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
        :disabled="isValidEmail"
        class="disabled-btn"
        :class="{ 'enabled-btn': !isValidEmail }"
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
    isValidEmail() {
      return !this.email;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>