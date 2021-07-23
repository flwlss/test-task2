<template>
  <div class="index">
    <div class="index-circle">
      <img alt="index-logo" :src="require('@/assets/img/mail.svg')" />
    </div>
    <p class="index-title">Подтверждение</p>
    <p v-if="check" class="index-text">
      На Ваш электронный адрес был выслан код, введите его ниже
    </p>
    <div class="index-wrapper">
      <form v-if="check" action="/confirmed">
        <input
          autofocus
          id="inputPin1"
          v-model="pin['n1']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
          :onkeyup="focusOnTwo"
        />
        <input
          id="inputPin2"
          v-model="pin['n2']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
          :onkeyup="focusOnThree"
        />
        <input
          id="inputPin3"
          v-model="pin['n3']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
          :onkeyup="focusOnFour"
        />
        <input
          id="inputPin4"
          v-model="pin['n4']"
          class="index-inputs"
          type="text"
          maxlength="1"
          :onkeypress="isValidNum"
        />
        <button
          :class="{ 'enabled-btn': isValidInput }"
          @click="checkPin"
          :disabled="!isValidInput"
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
    isValidInput() {
      return this.pin.n1 && this.pin.n2 && this.pin.n3 && this.pin.n4;
    },
    isValidPin() {
      return this.getPin === "1234";
    },
  },
  props: {},
  methods: {
    checkPin() {
      if (this.isValidPin) {
        return this.check;
      } else {
        this.check = false;
      }
    },
    isValidNum(evt) {
      // Проверяет, что введенный символ является числовым
      let charCode = evt.which ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
    },
    focusOnTwo() {
      if (this.pin.n1) {
        document.getElementById("inputPin2").focus();
      }
    },
    focusOnThree() {
      if (this.pin.n2) {
        document.getElementById("inputPin3").focus();
      }
    },
    focusOnFour() {
      if (this.pin.n3) {
        document.getElementById("inputPin4").focus();
      }
    },
  },
};
</script>