<template>
  <div class="wrapper">
    <div class="contact-title pb-3">
      <h2 class="title">Tell Us Your Project</h2>
    </div>
    <div class="contact-form-wrapper contact-form">
      <form action="#" id="contact-form">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-6">
                <div class="input-area mb-4">
                  <input
                    class="input-item"
                    type="text"
                    placeholder="Your Name *"
                    name="name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-area mb-4">
                  <input
                    class="input-item"
                    type="email"
                    placeholder="Email *"
                    name="email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-area mb-4">
                  <input
                    class="input-item"
                    type="text"
                    placeholder="Subject *"
                    name="subject"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-area mb-8">
                  <textarea
                    cols="30"
                    rows="5"
                    class="textarea-item"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  class="btn btn-secondary button-hover-primary"
                >
                  Send A Message
                </button>
              </div>
              <p class="col-8 form-message mb-0"></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped src="@/assets/css/components/contact/ContactForm.css">

</style>