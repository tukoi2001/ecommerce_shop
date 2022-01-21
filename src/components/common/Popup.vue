<template>
  <div class="wrapper">
    <div @click="handleShowPopup"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>Toyqo Shop</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <button @click="handleShowPopup" type="submit">OK</button>
        </slot>
      </menu>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
      
  },
  methods: {
    handleShowPopup() {
      this.$emit('hidePopup');
    } 
  }
};
</script>

<style scoped src="@/assets/css/components/common/popup.css">

</style>