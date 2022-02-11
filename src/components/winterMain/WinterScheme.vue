<template>
  <section id="scheme" class="scheme section-overlay" :style="{'background-image': 'url(' + require(`@/assets/img/${main.scheme.backgroundImage}`) + ')'}">
    <div class="container">
      <h2 class="h2">{{ main.scheme.title }}</h2>
      <div class="scheme-row">
        <div class="scheme-item" :key="item.id" v-for="item in main.scheme.schemeItems">
          <img width="50" height="50" :src="require(`@/assets/img/results/${item.img}`)" :alt="item.alt">
          <p class="results-item__text">{{ item.sign }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WinterScheme",
  props: {
    main: {}
  }
}
</script>

<style scoped>
.scheme {
  flex-grow: 2;
  border-bottom: 1px solid #FCFCFC;
}
.scheme-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.scheme-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fcfcfc;
  padding: 1em;
}
.scheme-item img {
  height: 50px;
}
</style>