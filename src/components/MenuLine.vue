<template>
  <div class="menu-line">
    <div class="container">
      <nav class="nav-menu">
        <button class="nav-toggle" type="button"> <span class="nav-toggle__item"></span></button>
        <ul>
          <li><router-link class="menu-link" to="/" exact>Главная</router-link></li>
          <li><router-link class="menu-link" to="/profile" exact>Люди</router-link></li>
          <li class="logo-wrapper">
            <a target="_blank" :href="top.marathonLink">
              <img width="50" height="50" class="logo-event" :src="require(`@/assets/img/${top.marathonLogo}`)" alt="МК Харьков">
            </a>
          </li>
          <li><router-link class="menu-link" to="/scheme" exact>На старте</router-link></li>
          <li><router-link class="menu-link" to="/locations" exact>Карта</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLine",
  props: {
    top: {
      marathonLink: {
        type: String,
        default: 'https://marathon.kharkov.ua/'
      },
      marathonLogo: {
        type: String,
        default: 'logo-mc.svg'
      }
    }
  }
}
</script>

<style scoped>
/* top line */
.menu-line {
  //position: absolute;
  //left: 0;
  //top: 0;
  background-color: rgba(111, 227, 187, 0.7);
  width: 100%;
  //z-index: 5;
  padding: 10px 0;
  border-bottom: 1px solid #FCFCFC;
}
.nav-toggle {
  display: none;
  width: 24px;
  height: 24px;
  color: transparent;
  font-size: 0;
  background: 0 0;
  border: none;
  cursor: pointer;
  position: relative;
  outline: 0;
}
.nav-toggle:focus {
  outline: 0;
}
.nav-toggle__item {
  display: block;
  width: 100%;
  height: 4px;
  background: #124c52;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}
.nav-toggle:before {
  content: "";
  width: 100%;
  height: 4px;
  background-color: #124c52;
  position: absolute;
  left: 0;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  bottom: 0;
}
.nav-toggle:after {
  content: "";
  width: 100%;
  height: 4px;
  background-color: #124c52;
  position: absolute;
  left: 0;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.2s linear;
  transition: -webkit-transform 0.2s linear;
  transition: transform 0.2s linear;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  top: 0;
}
.nav-menu ul {
  margin: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.nav-menu ul li {
  list-style-type: none;
  margin: 0 15px;
}
.nav-menu ul a {
  position: relative;
  font-weight: 800;
  display: block;
  color: #124c52;
  text-decoration: none;
  transition: color 0.3s ease;
}
.nav-menu ul a:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  width: 0;
  background: #fff;
  transition: width 0.3s ease;
}
.nav-menu ul .logo-wrapper a:before {
  display: none;
}
.nav-menu ul a:not(.router-link-exact-active):hover:before {
  width: 100%;
}
.nav-menu ul .router-link-exact-active {
  color: #fcfcfc;
}
.menu-line a:hover {
  color: #fcfcfc;
}
.logo-wrapper {
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 50%;
  background-color: #fcfcfc;
}
.logo-wrapper a,
.logo-wrapper a:hover {
  cursor: pointer;
  text-decoration: none;
  outline: 0;
}
.logo-wrapper img {
  position: relative;
  right: -1px;
  bottom: 4px;
}
@media only screen and (max-width: 768px) {
  .nav-menu {
    display: flex;
    justify-content: space-between;
  }
  .nav-menu ul {
    flex-grow: 2;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: height 1s ease;
  }
  .nav-menu.active ul {
    height: auto;
  }
  .nav-toggle {
    display: block;
  }
}
</style>