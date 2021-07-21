<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" src="../assets/mail.svg" />
    </div>
    <p class="index-title">Подтверждение</p>
    <p class="index-text">
      На Ваш электронный адрес был выслан код, введите его ниже
    </p>
    <div class="index-wrapper">
      <form action="/confirmed">
        <input autofocus v-model="pin['v1']" class="index-inputs" type="text" />
        <input v-model="pin['v2']" class="index-inputs" type="text" />
        <input v-model="pin['v3']" class="index-inputs" type="text" />
        <input v-model="pin['v4']" class="index-inputs" type="text" />

        <button
          :class="{ 'enabled-btn': validateInput }"
          @click="validate_pin"
          :disabled="!validateInput"
          class="disabled-btn"
        >
          Продолжить
        </button>
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
        v1: "",
        v2: "",
        v3: "",
        v4: "",
      },
    };
  },
  computed: {
    getPin() {
      return this.pin.v1 + this.pin.v2 + this.pin.v3 + this.pin.v4;
    },
    validateInput() {
      return this.pin.v1 && this.pin.v2 && this.pin.v3 && this.pin.v4;
    },
    pin_is_valid() {
      return this.getPin === "1234";
    },
  },
  props: {},
  methods: {
    validate_pin() {
      if (this.pin_is_valid) {
        alert("pin valid");
      } else {
        alert("pin invalid");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>