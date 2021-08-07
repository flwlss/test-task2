<template>
  <div class="index">
    <div class="index__circle">
      <img alt="index__logo" :src="require('@/assets/img/mail.svg')" />
    </div>
    <p class="index__title">Подтверждение</p>
    <p class="index__text">
      На Ваш электронный адрес был выслан код, введите его ниже
    </p>
    <div class="index__wrapper">
      <input
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
      <div class="index__error" v-if="this.pinCheck">Неверный пин-код</div>
      <button
        :class="{ 'enabled-btn': isValidInput }"
        @click="toConfirmed"
        :disabled="!isValidInput"
        class="disabled-btn"
      >
        Продолжить
      </button>
    </div>
    <a class="index__login" href="">Выслать код повторно</a>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  data() {
    return {
      pin: {
        n1: "",
        n2: "",
        n3: "",
        n4: "",
      },
      pinCheck: false,
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
    toConfirmed() {
      if (this.isValidPin) {
        this.$router.push("/confirmed");
      } else {
        this.pinCheck = true;
        this.pin.n1 = "";
        this.pin.n2 = "";
        this.pin.n3 = "";
        this.pin.n4 = "";
        document.getElementById("inputPin1").focus();
      }
    },
    isValidNum(evt) {
      // Проверяет, что введенный символ является числовым
      let charCode = evt.which ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
    },
    // сделать один метод
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
  mounted() {
    document.getElementById("inputPin1").focus();
  },
};
</script>