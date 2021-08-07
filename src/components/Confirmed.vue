<template>
  <div class="index">
    <div class="index__check">
      <img alt="index__logo" :src="require('@/assets/img/check.svg')" />
    </div>
    <p class="index__title">Почта подтверждена!</p>
    <p class="index__text">
      На Ваш электронный адрес выслан бланк пассажирской таможенной декларации и
      штрих-код для доступа к быстрой печати с сенсорного терминала
    </p>

    <button @click="toIndex" class="enabled-btn">Вернуться</button>
  </div>
</template>

<script>
export default {
  name: "Confirmed",
  props: {},
  data() {
    return {};
  },
  methods: {
    // взять из индекса
    toIndex() {
      this.$router.push("/");
    },
  },
};
</script>
