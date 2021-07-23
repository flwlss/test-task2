<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" :src="require('@/assets/img/mail.svg')" />
    </div>
    <p class="index-title">Без регистрации</p>
    <p class="index-text">Введите адрес электронной почты</p>

    <form action="/confirm">
      <input
        type="email"
        class="index-input"
        v-model="email"
        placeholder="Введите email"
      />
      <button
        type="submit"
        :disabled="isValidInput"
        class="disabled-btn"
        :class="{ 'enabled-btn': !isValidInput }"
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
    isValidInput() {
      return !this.email;
    },
  },
};
</script>