<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-row">
          <div class="footer-col footer-socials">
            <h5 class="h5">{{ footer.title1 }}</h5>
            <p>{{ footer.text }}</p>
            <nav class="footer-socials-ref">
              <ul>
                <li><a :href="footer.link1"><i
                  class="fa fa-facebook"></i></a></li>
                <li><a :href="footer.link2"><i
                  class="fa fa-instagram"></i></a></li>
              </ul>
            </nav>
          </div>
          <div class="footer-col footer-contacts">
            <h5 class="h5">{{ footer.title2 }}</h5>
            <div class="footer-contacts-wrap footer-contacts-adr">
              <i class="fa fa-map-marker"></i>
              <p>{{ footer.address }}</p>
            </div>
            <div class="footer-contacts-wrap footer-contacts-tel">
              <i class="fa fa-phone"></i>
              <p><a :href="`${footer.phonePre}${footer.phone}`">{{ footer.phone }}</a></p>
            </div>
          </div>
          <div class="footer-col footer-email">
            <div class="footer-contacts-wrap footer-contacts-mail">
              <i class="fa fa-envelope-o"></i>
              <p><a :href="`${footer.mailPre}${footer.mail}`">{{ footer.mail }}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        Copyright &copy; 2021 <a :href="footer.authorSite">{{ footer.author }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "WinterFooter",
  props: {
    footer: {}
  }
}
</script>

<style scoped>
/* footer */
.footer-top {
  padding: 50px 0;
  background-color: #FFAD7D;
  color: #fcfcfc;
  font-size: 0.875rem;
}
.footer-row {
  display: flex;
  flex-wrap: wrap;
}
.footer-col {
  box-sizing: border-box;
}
.footer-socials {
  width: 50%;
  padding-right: 50px;
}
.footer-socials-ref ul {
  padding-left: 0;
}
.footer-socials-ref ul li {
  display: inline-block;
  margin-right: 10px;
}
.footer-socials-ref ul li a {
  color: inherit;
  transition: color .3s ease;
  font-size: 1.312rem;
}
.footer-socials-ref ul li a:hover {
  color: #fed100;
}
.footer-contacts {
  width: 25%;
}
.footer-email {
  width: 25%;
}
.footer-contacts .footer-contacts-wrap {
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 10px 10px 0;
}
.footer-contacts .footer-contacts-wrap p {
  margin: 0;
}
.footer-contacts .footer-contacts-wrap .fa {
  font-size: 21px;
  margin-right: 5px;
}
.footer-contacts-tel a {
  color: inherit;
}
.footer-contacts-mail {
  display: flex;
  align-items: center;
}
.footer-contacts-mail a {
  color: inherit;
  margin-left: 10px;
}
.footer-bottom {
  font-size: 0.875rem;
  text-align: center;
  padding: 30px 0;
  background-color: #6FE3BB;;;
  color: #f7f6f4;
  font-weight: 600;
}
.footer-bottom a {
  color: inherit;
}
.footer-bottom a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 992px) {
  .footer-socials {
    width: 100%;
    padding-right: 0;
  }
  .footer-contacts {
    width: 50%;
  }
  .footer-email {
    width: 50%;
  }
  .footer-contacts .footer-contacts-wrap {
    margin-left: 0;
  }
}
@media only screen and (max-width: 768px) {
  .footer-contacts {
    width: 100%;
  }
  .footer-email {
    width: 100%;
  }
  .footer-top {
    padding: 20px 0;
  }
  .footer-contacts {
    border-bottom: 1px solid #fff9d9;
    padding-bottom: 10px;
  }
  .footer-col.footer-socials > .h5 {
    margin: 0 0 5px 0 !important;
  }
  .footer-contacts-tel {
    margin-top: 5px;
  }
}
</style>