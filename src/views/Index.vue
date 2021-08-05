<template>
  <div class="index">
    <div class="index__circle">
      <img alt="index__logo" :src="require('@/assets/img/mail.svg')" />
    </div>
    <p class="index__title">Без регистрации</p>
    <p class="index__text">Введите адрес электронной почты</p>

    <input class="index-input" v-model="email" placeholder="Введите email" />
  <!-- добавить неверный мейл -->
    <button
      type="submit"
      :disabled="isValidInput"
      class="disabled-btn"
      :class="{ 'enabled-btn': !isValidInput }"
      @click="toConfirm"
    >
      Продолжить
    </button>

    <a class="index__login" href="">Вход через Госуслуги</a>
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
    isValidMail() {
      return this.email.includes("@");
      // добавить фильтр по символам
    },
  },
  methods: {
    toConfirm() {
      if (!this.isValidInput && this.isValidMail) {
        this.$router.push("/confirm");
      } else {
        alert("pas");
        // сделать вывод неверного мейла
      }
    },
  },
};
</script>