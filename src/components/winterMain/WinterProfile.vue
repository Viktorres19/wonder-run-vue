<template>
  <section id="profile" class="profile-section section-light">
    <div class="container">
      <h2 class="h2">{{ main.profile.title }}</h2>
      <h3 class="h3">{{ main.profile.text1 }}</h3>
      <h3 class="h3">{{ main.profile.text2 }}</h3>
      <div class="profile-row">
        <div class="profile-holder" :key="member.id" v-for="member in main.profile.members">
          <div class="profile-item">
            <div class="profile-col">
              <a href="#" class="profile-img__wrap">
                <img :src="require(`@/assets/img/experts/${member.img}`)" :alt="member.alt">
              </a>
            </div>
            <div class="profile-col">
              <div class="profile-text">
                <h3 class="h3"><i>{{ member.remark }}</i></h3>
                <a target="_blank" :href="member.link" class="h4">{{ member.name }}</a>
                <p>{{ member.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WinterProfile",
  props: {
    main: {}
  }
}
</script>

<style scoped>
.profile-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: 0 -0.6em;
}
.profile-holder {
  padding-left: 0.6em;
  padding-right: 0.6em;
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5em;
}
.profile-item {
  display: flex;
  overflow: hidden;
  padding: 10px;
  background-color: #5973E6;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.profile-col {
  width: 50%;
}
.profile-img__wrap {
  display: block;
  outline: 0;
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 108%;
  border-radius: 5px 0 0 5px;
  outline: 0;
  text-decoration: none;
}
.profile-img__wrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  -webkit-transition: all 1s ease-out;
}
.profile-img__wrap img:hover {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
}
.profile-text {
  height: 100%;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile-text a,
.profile-text a:hover {
  color: #f7f6f4;
  cursor: pointer;
}
.profile-text .h3 {
  color: #E3CB6F;
  text-align: center;
  margin: 5px 0;
}
.profile-text .h4 {
  margin: 0;
  margin-bottom: 0.5em;
  text-transform: none;
}
.profile-text p {
  margin: 0;
  font-weight: 700;
  color: #6FE3BB;;;
}
@media only screen and (max-width: 768px) {
  .profile-row {
    margin: 0;
  }
  .profile-holder {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
@media only screen and (max-width: 480px) {
  .profile-item {
    flex-wrap: wrap;
  }
  .profile-col {
    width: 100%;
  }
  .profile-img__wrap {
    border-radius: 5px;
  }
  .profile-text {
    text-align: center;
  }
}
</style>