<template>
  <div class="wrapper">
    <div class="contact">
      <div class="container">
        <router-link to="/" class="contact__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="contact__title">Liên hệ với chúng tôi</span>
      </div>
    </div>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2865504824813!2d108.21312051468394!3d16.050613288892418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c79e5680af%3A0xba8f5b087ff226c!2zNDQ4IFRyxrBuZyBO4buvIFbGsMahbmcsIEjDsmEgVGh14bqtbiDEkMO0bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1640662128691!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <contact-form/>
            </div>
            <div class="col-md-6">
                <contact-content/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ContactContent from '../components/contact/ContactContent.vue'
import ContactForm from '../components/contact/ContactForm.vue'
export default {
  components: { ContactForm, ContactContent },
    name: 'Contact',

}
</script>

<style scoped>
.contact {
    background-color: #00c4cc;
    padding: 30px 20px;
}
.contact__home {
    color: #000;
    font-size: 1.4rem;
    padding: 8px;
}
.contact__title {
    padding: 0 8px;
}
</style>