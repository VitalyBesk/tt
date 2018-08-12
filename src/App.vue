<template>
  <div id="app">
    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 class="title-primary">Contacts</h1>
          </div>
          <div class="col-xs-12 col-sm-6 main__col">
            <h2 class="title-secondary"><strong class="title-secondary--strong">GMS</strong> Headquarters</h2>
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <p class="main__descr">Global Message Services Ukraine LLC <br>
                  Bundesstrasse 5 | 3rd Floor<br>
                  6300 Zug<br>
                  Switzerland</p>
                  <a href="tel:+41415446200" class="main__tel">+41 41 544 62 00</a>
                </div>
                <div class="col-xs-12 col-md-6">
                  <p class="main__descr">
                    Email <br>
                    <a href="mailto:info@gms-worldwide.com" class="main__link">info@gms-worldwide.com</a>
                  </p>
                  <p class="main__descr">
                    Send message <br>
                    <a href="viber://chat?number=+41415446200" class="main__link">Viber us</a>
                  </p>
                  <p class="main__descr">
                    Send form <br>
                    <a
                    href="#"
                    v-scroll-to="'#form'"
                    class="main__link">Contact us</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <h2 class="title-secondary">Technical support <strong class="title-secondary--strong">24/7</strong></h2>
              <p class="main__descr">GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
              <a href="tel:+41415446206" class="main__tel">+41 41 544 62 06</a>
            </div>
          </div>
        </div>
      </main>
      <map-section></map-section>
      <form-section action="http://httpbin.org/post"></form-section>
    </div>
  </template>

  <script>
  import mapSection from './components/MapSection.vue'
  import formSection from './components/FormSection.vue'

  export default {
    components: {
      mapSection,
      formSection
    }
  }
  </script>
