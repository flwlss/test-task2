<template>
  <div class="index">
    <div class="index-check">
      <img alt="index-logo" :src="require('@/assets/img/check.svg')" />
    </div>
    <p class="index-title">Почта подтверждена!</p>
    <p class="index-text">
      На Ваш электронный адрес выслан бланк пассажирской таможенной декларации и
      штрих-код для доступа к быстрой печати с сенсорного терминала
    </p>

    <button @click="toIndex" class="enabled-btn">Вернуться</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {};
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
  },
};
</script>
