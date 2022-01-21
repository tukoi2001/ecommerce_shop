<template>
  <div class="wrapper">
    <h2 class="account__title">Chi tiết tài khoản</h2>
    <div class="row">
      <div class="col-lg-6">
        <div class="single-input-item mb-3">
          <label for="first-name" class="required mb-1">Tên</label>
          <input
            type="text"
            id="first-name"
            placeholder="Tên"
            v-model="firstName"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="single-input-item mb-3">
          <label for="last-name" class="required mb-1">Họ</label>
          <input
            type="text"
            id="last-name"
            placeholder="Họ"
            v-model="lastName"
          />
        </div>
      </div>
    </div>
    <div class="single-input-item mb-3">
      <label for="display-name" class="required mb-1">Email</label>
      <input
        type="text"
        id="display-name"
        placeholder="Email"
        v-model="email"
      />
    </div>
    <div class="single-input-item mb-3">
      <label for="email" class="required mb-1">Địa chỉ</label>
      <input type="email" id="email" placeholder="Địa chỉ" v-model="address" />
    </div>
    <div class="single-input-item mb-3 single-item-button">
      <button class="btn btn-hover-primary btn-sm btn-color" @click="saveAddress()">Lưu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return { 
      address: "",
    }
  },
  props: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
  methods: {
    saveAddress() {
      if (this.address !== '') {
        localStorage.setItem("userAddress", JSON.stringify(this.address));
        alert("Cập nhật thông tin thành công!");
      }
    }
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("userAddress"));
    if (data && data !== null) {
      this.address = data;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/account.css"></style>
