<template>
  <div id="app" class="app">
    <menu-line :top="top" />
    <transition name="fade">
      <router-view :main="main"></router-view>
    </transition>
    <winter-footer :footer="footer" />
  </div>
</template>

<script>
import MenuLine from "./components/MenuLine";
import WinterFooter from "./components/WinterFooter";

export default {
  name: 'App',
  data () {
    return {
      neededInfo: [],
      top: {
        marathonLink: 'https://marathon.kharkov.ua/',
        marathonLogo: 'logo-mc.svg'
      },
      main: {
        header: {
          bannerPayment: {
            title: 'Номер карты для благотворительного взноса 1000 гривен',
            distances: 'забеги на многих дистанциях',
            card: '0000000000000000',
            phone: 'При отправке взноса, звонить на номер телефона: 0505555555',
            description: 'Обязательно во время отправки взноса сообщать в личку на FB фамилию, имя, дистанцию, клуб и дату рождения',
            name: 'Wonder Woman',
            socialLink: 'https://www.facebook.com/superman/',
            socialText: 'Моя страница Facebook'
          },
          steadyTimer: {
            title: 'До старта',
            text: 'осталось:',
            timerDays: 'Дней',
            timerHours: 'Часов',
            timerMinutes: 'Минут',
            timerSeconds: 'Секунд'
          },
          knowMore: 'Узнать больше',
          projectLogo: {
            src: 'project-logo.svg',
            alt: 'Все бегут'
          },
          headerBackground: {
            url: 'zima.jpg'
          }
        },
        profile: {
          title: 'Немного информации о людях на пробеге "Wonder Run"',
          text1: 'Практически все деньги за соревнования я заберу себе',
          text2: 'Про чемпионов, а также оранизаторов:',
          members: [
            {
              id: '1',
              remark: '',
              name: 'Wonder Woman',
              text: 'Организует тут всё',
              img: 'person-01.jpg',
              alt: 'Wonder Woman',
              link: 'https://www.facebook.com/superman/'
            },
            {
              id: '2',
              remark: '',
              name: 'Super Man',
              text: 'Чемпион полета 100м',
              img: 'person-02.jpg',
              alt: 'Super Man',
              link: 'https://www.facebook.com/superman/'
            },
            {
              id: '3',
              remark: '',
              name: 'Iron Man',
              text: 'Чемпион по толканию людей',
              img: 'person-03.jpg',
              alt: 'Iron Man',
              link: 'https://www.facebook.com/superman/'
            },
            {
              id: '4',
              remark: '',
              name: 'Hulk',
              text: 'Злит всех и сам неспокоен',
              img: 'person-04.jpg',
              alt: 'Hulk',
              link: 'https://www.facebook.com/superman/'
            }
          ]
        },
        scheme: {
          backgroundImage: 'results-bg.jpg',
          title: 'В процессе вас ждет:',
          schemeItems: [
            { id: '1', img: 'res_1.svg', sign: 'Регистрация на участие', alt: 'pic_1' },
            { id: '2', img: 'res_3.svg', sign: 'Разминка перед стартом', alt: 'pic_3' },
            { id: '3', img: 'res_7.svg', sign: 'Забеги на дистанциях', alt: 'pic_7' },
            { id: '4', img: 'res_6.svg', sign: 'Награждение', alt: 'pic_6' }
          ]
        },
        locations: {
          mapTitle: 'Трасса расположена радом в Шервудском лесу',
          mapSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19116.338913500855!2d-1.1149842072804101!3d53.20812311938023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879bb521a31d177%3A0xb78644adda10aa35!2z0KjQtdGA0LLRg9C0INCk0L7RgNC10YHRgg!5e0!3m2!1sru!2sua!4v1644584913166!5m2!1sru!2sua',
          imageTitle: 'Бегайте сколько угодно в этом увлекательном лесу',
          imageSource: 'locations-map.jpg',
          imageAlt: 'Карта Шервудского леса',
          conditions: [
            { id: '1', item: 'Участники: все желающие от 16 лет' },
            { id: '2', item: 'мандатная комиссия с 8.30,старт общий для всех дистанций' },
            { id: '3', item: 'Условия подведения итогов:',
              details: [
                { id: '1', detail: 'а) абсолют' },
                { id: '2', detail: 'б) категории: 16-18 лет,19- 22, 23-39, 40+, 50+, 60+, 70 +' },
                { id: '3', detail: 'в) определение лучшей команды по 10 лучшим результатам' }
              ]
            },
            { id: '4', item: 'Награждение:',
              details: [
                { id: '1', detail: 'Все участники получают медали, абсолютные победители спецмедали, грамоты' },
                { id: '2', detail: 'Победители в группе - грамоты' },
                { id: '3', detail: 'Первые 3 команды награждаются кубками и грамотами' }
              ]
            }
          ]
        }
      },
      footer: {
        title1: 'О нас',
        text: 'Соревнования будут проходить 30 июня 2022 года в 10:00 в Шервудском лесу Британии. Локация насыщена живописными видами, местами отдыха для взрослых и детей',
        link1: 'https://www.facebook.com/superman/',
        link2: 'https://www.facebook.com/superman/',
        title2: 'Контакты',
        address: 'Шервудский лес',
        phone: '0505555555',
        phonePre: 'tel:+38',
        mail: 'super-man@gmail.com',
        mailPre: 'mailto:',
        authorSite: 'http://viktor-l-portfolio.zzz.com.ua/',
        author: 'Viktorres'
      }
    }
  },
  components: {
    WinterFooter,
    MenuLine

  },
  created() {

  }
}
</script>

<style>
/* general styles */
html {
  font-size: 16px;
}
body {
  font-size: 1rem;
  line-height: 1.2;
  min-width: 320px;
  position: relative;
  font-family: Raleway, sans-serif;
  overflow-x: hidden;
  opacity: 1;
  background-color: rgba(111, 227, 187, 0.7);
  margin: 0;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
header,
nav,
section {
  display: block;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
img {
  border: 0;
  vertical-align: middle;
}
button {
  color: inherit;
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  border: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:focus,
a:hover {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.container {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
}
.container:after,
.container:before {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-envelope-o:before {
  content: "\f003";
}
.fa-arrow-circle-o-down:before {
  content: "\f01a";
}
.fa-map-marker:before {
  content: "\f041";
}
.fa-phone:before {
  content: "\f095";
}
.fa-facebook:before {
  content: "\f09a";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-instagram:before {
  content: "\f16d";
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.h1,
.h2,
.h3,
.h4,
.h5 {
  font-family: Raleway, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #fcfcfc;
  line-height: 1.2;
}
.h1 {
  font-size: 2.625rem;
}
.h2 {
  font-size: 1.875rem;
}
.h3 {
  font-size: 1.625rem;
}
.h4 {
  font-size: 1.375rem;
}
.h5 {
  font-size: 1.125rem;
}
header,
section {
  position: relative;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}
section {
  background-color: #FCFCFC;
  padding: 5em 0;
}
section .container > .h2,
section .container > .h3 {
  text-align: center;
}

@media only screen and (max-width: 992px) {
  html {
    font-size: 15px;
  }
}
@media only screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 13px;
  }
  .container {
    padding-left: 5px;
    padding-right: 5px;
  }
}
/* main */
.section-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #E3CB6F;
  opacity: 0.85;
}
.section-overlay > * {
  position: relative;
}
.section-overlay {
  padding: 7em 0;
}
.section-light .container > .h2 {
  color: #FFAD7D;
  margin-bottom: 0.2em;
}
.section-light .container > .h3 {
  color: #333;
  margin-top: 0.2em;
  font-weight: 400;
  text-align: left;
}
/* animation keyframes */
@-webkit-keyframes turning {
  0% {
    right: 600px;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes turning {
  0% {
    right: 600px;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@-webkit-keyframes leftturning {
  0% {
    left: 300px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
@keyframes leftturning {
  0% {
    left: 300px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}
@-webkit-keyframes rightturning {
  0% {
    right: 300px;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes rightturning {
  0% {
    right: 300px;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
