<template>
  <header class="header" :style="{'background-image': 'url(' + require(`@/assets/img/${main.header.headerBackground.url}`) + ')'}">
    <div class="header-content">
      <div class="header-inner">
        <form class="callback header-col">
          <h3 class="h3">{{ main.header.bannerPayment.title }}</h3>
          <p><i>{{ main.header.bannerPayment.distances }}</i></p>
          <h2 class="h2">{{ main.header.bannerPayment.card }}</h2>
          <p>{{ main.header.bannerPayment.phone }}</p>
          <p>{{ main.header.bannerPayment.description }}</p>
          <h3 class="h3">{{ main.header.bannerPayment.name }}</h3>
          <a :href="main.header.bannerPayment.socialLink"><i class="fa fa-facebook"></i>
            {{ main.header.bannerPayment.socialText }}
          </a>
        </form>
        <div class="tagline header-col">
          <h1 class="h1">{{ main.header.steadyTimer.title }}</h1>
          <div class="logo-wrap__wrap">
            <img width="200" height="200" class="logo-event" :src="require(`@/assets/img/${main.header.projectLogo.src}`)" :alt="main.header.projectLogo.alt">
          </div>
          <div class="h2">{{ main.header.steadyTimer.text }}</div>
          <div class="countdown">
            <div class="countdown-item">
              <div class="countdown-item__number" id="day">{{ countDays }}</div>
              <p id="day-sign">{{ daySign }}</p>
            </div>
            <div class="countdown-item">
              <div class="countdown-item__number" id="hour">{{ countHours }}</div>
              <p id="hour-sign">{{ hourSign }}</p>
            </div>
            <div class="countdown-item">
              <div class="countdown-item__number" id="minute">{{ countMinutes }}</div>
              <p id="minute-sign">{{ minuteSign }}</p>
            </div>
            <div class="countdown-item">
              <div class="countdown-item__number" id="second">{{ countSeconds }}</div>
              <p id="second-sign">{{ secondSign }}</p>
            </div>
            <div class="pulse"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <router-link to="/profile" exact>
        <p>{{ main.header.knowMore }}</p><span><i class="fa fa-arrow-circle-o-down"></i></span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "WinterHeader",
  data () {
    return {
      countDays: 0,
      countHours: 0,
      countMinutes: 0,
      countSeconds: 0,
      targetTime: 0,
      expired: false,
      now: 0,
      timeLeft: 0,
      daySign: "Дней",
      hourSign: "Часов",
      minuteSign: "Минут",
      secondSign: "Секунд",
      timer: ''
    }
  },
  props: {
    main: {}
  },
  mounted() {
    this.kickStart()
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    kickStart () {
      this.timer = setInterval(() => {
        this.targetTime = new Date('June 30, 2022 09:00:00');
        this.now = new Date().getTime();
        this.timeLeft = this.targetTime - this.now;

        this.countDays = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
        this.countHours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countMinutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.countSeconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
        }
        this.daySign = this.changeSign(this.countDays, "Дней", "Дня", "День")
        this.hourSign = this.changeSign(this.countHours, this.hourSign, "Часов", "Часа", "Час")
        this.minuteSign = this.changeSign(this.countMinutes, "Минут", "Минуты", "Минута")
        this.secondSign = this.changeSign(this.countSeconds, "Секунд", "Секунды", "Секунда")
      }, 1000);
    },
    changeSign (count, first, second, third) {
      let sign;
      let countString = count.toString();
      if (count > 5) {
        if (!(count < 15 && count > 10)) {
          if (+(countString[countString.length - 1]) < 5 && +(countString[countString.length - 1]) > 1) {
            sign = second;
          } else if (+(countString[countString.length - 1]) === 1) {
            sign = third;
          } else {
            sign = first;
          }
        } else {
          sign = first;
        }
      } else if (count < 5 && count > 1) {
        sign = second;
      } else if (count === 1) {
        sign = third;
      } else {
        sign = first;
      }
      return sign
    }
  }
}
</script>

<style scoped>
/* header */
.header {
  min-height: 700px;
  height: 100vh;
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid #FCFCFC;
}
.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFAD7D;
  opacity: 0.85;
}
.header-bottom {
  display: block;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-position: center center;
  text-align: center;
  position: relative;
  z-index: 2;
}
.header-bottom a {
  display: inline-block;
  color: #f7f6f4;
  font-size: 0.875rem;
  -webkit-transition: color 0.25s ease;
  -o-transition: color 0.25s ease;
  transition: color 0.25s ease;
}
.header-bottom a:hover {
  color: #6FE3BB;;;
}
.header-bottom a:hover i {
  color: #6FE3BB;;;
}
.header-bottom a p {
  display: inline-block;
}
.header-bottom a i {
  padding-left: 10px;
  font-size: 1.125rem;
  color: #f7f6f4;
}
.header-content {
  flex-grow: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
.header-inner {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
}

.header-col {
  margin: 0 2em;
}
.callback {
  color: #124c52;
  position: relative;
  -webkit-animation: turning 3.5s ease-out;
  animation: turning 3.5s ease-out;
  padding: 15px;
  background-color: #6FE3BB;;;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.callback p {
  margin: 0;
}
.callback .h2 {
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  color: #5973E6;
}
.callback a {
  color: #fcfcfc;
}
.tagline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #fcfcfc;
}
.tagline .h1 {
  margin-top: 0.2em;
}
.tagline .h1 {
  position: relative;
  margin-top: 30px;
  -webkit-animation: leftturning 3s;
  animation: leftturning 3s;
}
.tagline .h2 {
  position: relative;
  margin-top: 20px;
  font-style: italic;
  line-height: 1.4;
  -webkit-animation: rightturning 3s;
  animation: rightturning 3s;
}
.logo-wrap__wrap {
  padding: 10px;
  background-color: #fcfcfc;
  border-radius: 50%;
}
.countdown {
  display: flex;
  font-family: Monoton, cursive;
}
.countdown-item {
  text-align: center;
  margin: 0 5px;
}
.countdown-item__number {
  font-size: 2.5rem;
  border: 3px solid #fff;
  padding: 5px;
  height: 86px;
  width: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 992px) {
  .header-col {
    margin: 0 1em;
  }
  .countdown-item__number {
    font-size: 2rem;
    border: 2px solid #fff;
    padding: 3px;
    height: 60px;
    width: 60px;
  }
}
@media only screen and (max-width: 768px) {
  .header {
    height: auto;
  }
  .header-inner {
    display: flex;
    flex-direction: column-reverse;
    padding: 50px;
  }
  .callback {
    margin: 0 20px;
    max-width: 450px;
  }
  .tagline .h1 {
    margin-top: 0;
    font-size: 1.625rem;
  }
  .tagline .h2 {
    margin-top: 0;
    font-size: 1.125rem;
  }
  .header-bottom {
    display: none;
  }
}
</style>