<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" src="../assets/mail.svg" />
    </div>
    <p class="index-title">Подтверждение</p>
    <p v-if="check === true" class="index-text">
      На Ваш электронный адрес был выслан код, введите его ниже
    </p>
    <div class="index-wrapper">
      <form v-if="check === true" action="/confirmed">
        <input
          autofocus
          v-model="pin['n1']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
        />
        <input
          v-model="pin['n2']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
        />
        <input
          v-model="pin['n3']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
        />
        <input
          v-model="pin['n4']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
        />
        <button
          :class="{ 'enabled-btn': validateInput }"
          @click="validate_pin"
          :disabled="!validateInput"
          class="disabled-btn"
        >
          Продолжить
        </button>
      </form>
      <form v-else action="">
        <div class="index-error">Неверный пароль</div>
        <button class="enabled-btn">Вернуться</button>
      </form>
    </div>
    <a class="index-login" href="">Выслать код повторно</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      pin: {
        n1: "",
        n2: "",
        n3: "",
        n4: "",
      },
      check: true,
    };
  },
  computed: {
    getPin() {
      return this.pin.n1 + this.pin.n2 + this.pin.n3 + this.pin.n4;
    },
    validateInput() {
      return this.pin.n1 && this.pin.n2 && this.pin.n3 && this.pin.n4;
    },
    pin_is_valid() {
      return this.getPin === "1234";
    },
  },
  props: {},
  methods: {
    validate_pin() {
      if (this.pin_is_valid) {
        return this.check;
      } else {
        this.check = false;
      }
    },
    isValidNum(evt) {
      var charCode = evt.which ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>