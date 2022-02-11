<template>
  <section id="locations" class="locations section-light">
    <div class="container">
      <h2 class="h2">{{ main.locations.mapTitle }}</h2>
      <div class="map-wrapper">
        <iframe :src="main.locations.mapSource" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <h2 class="h2">{{ main.locations.imageTitle }}</h2>
      <div class="map-wrapper">
        <img :src="require(`@/assets/img/${main.locations.imageSource}`)" :alt="main.locations.imageAlt">
      </div>
      <div class="map-list">
        <ul>
          <li :key="element.id" v-for="element in main.locations.conditions">
            {{ element.id }}. {{ element.item }}
            <ul>
              <li :key="single.id" v-for="single in element.details">
                {{ single.detail }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WinterLocations",
  props: {
    main: {}
  }
}
</script>

<style scoped>
.locations .container > .h2 {
  color: #FFAD7D;
  margin-bottom: 0.2em;
}
.map-wrapper {
  margin-top: 1em;
}
.map-wrapper iframe {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}
.map-wrapper img {
  display: block;
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.map-list {
  margin: 1.5em 0;
  font-size: 20px;
}
.map-list ul {
  list-style-type: none;
  margin: 0;
}
.map-list > ul {
  padding: 0;
}
</style>