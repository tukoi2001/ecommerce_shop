<template>
  <div class="wrapper">
    <h2 class="password__title">Đổi Mật khẩu</h2>
    <div class="row">
      <div class="col-lg-12">
        <div class="single-input-item mb-3">
          <label for="current_password" class="required mb-1"
            >Mật khẩu hiện tại</label
          >
          <input
            type="password"
            id="current_password"
            placeholder="Mật khẩu hiện tại"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="single-input-item mb-3">
          <label for="password" class="required mb-1">Mật khẩu mới</label>
          <input type="password" id="password" placeholder="Mật khẩu mới" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="single-input-item mb-3">
          <label for="password_confirm" class="required mb-1"
            >Nhập lại mật khẩu</label
          >
          <input
            type="password"
            id="password_confirm"
            placeholder="Nhập lại mật khẩu"
          />
        </div>        
      </div>
      <div class="single-input-item mb-3 single-item-button">
          <button class="btn btn-hover-primary btn-sm btn-color">Lưu</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
};
</script>

<style scoped src="@/assets/css/components/me/changepassword.css"></style>
