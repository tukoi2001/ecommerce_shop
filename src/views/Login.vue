<template>
  <div class="wrapper">
    <div class="container">
      <div class="row content__login">
        <div class="content__login-img col-md-6">
          <img src="@/assets/images/login/embe.png" alt="" />
        </div>
        <div class="col-md-6 content__login-form">
          <form class="form__login" @submit.prevent="login()">
            <span class="form__title"> Login </span>
            <div class="form__email">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.email"
                type="email"
                placeholder="Email"
                class="form__email-input"
                :class="{ 'is-invalid': submitted && $v.userForm.email.$error }"
              />
              <span class="form__email-symbol">
                <b-icon icon="envelope"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.email.required"
                  >Email is required</span
                >
                <span v-if="!$v.userForm.email.email">Email is invalid</span>
              </div>
            </div>
            <div class="form__password">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.password"
                :type="type"
                placeholder="Password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.password.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
              </span>
               <span class="form__password-right" @click.stop="showPassword()">
                <b-icon v-if="type == 'password'" icon="eye"></b-icon>
                <b-icon v-if="type == 'text'" icon="eye-slash"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.password.required"
                  >Password is required</span
                >
                <span v-if="!$v.userForm.password.minLength"
                  >Password must be at least 8 characters</span
                >
              </div>             
            </div>
            <div class="form__check py-1 d-flex align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                v-model.trim="checkSaveInfo"
              />
              <label
                class="form-check-label form__label ms-2"
                for="flexCheckDefault"
              >
                Lưu tài khoản
              </label>
            </div>
            <div class="form__btn">
              <button type="submit" class="form__btn-submit">Login</button>
            </div>
            <div class="form__forget text-center pt-3" v-if="textDanger">
              <span class="form__forget-danger danger">
                Email hoặc mật khẩu chưa đúng!
              </span>
            </div>
            <div class="form__forget text-center pt-3">
              <span class="form__forget-span">Forgot</span>
              <a class="form__forget-link" href="#"> Username / Password?</a>
            </div>
            <div class="text-center pt-5">
              <router-link to="/register" class="form__register"
                >Create your Account
                <b-icon icon="arrow-right-circle"></b-icon>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <popup @hidePopup="handleShowPopup" v-if="showPopup">
      <template #default>
        <p class="slot__para">Đăng nhập thành công!</p>
      </template>
      <template #actions @hidePopup="handleShowPopup"> </template>
    </popup>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import AuthServices from "@/services/auth-service.js";
import Popup from "../components/common/Popup.vue";

export default {
  components: { Popup },
  name: "Login",
  data() {
    return {
      userForm: {
        email: "",
        password: "",
      },
      showPopup: false,
      textDanger: false,
      submitted: false,
      type: 'password',
      checkSaveInfo: '',
    };
  },
  validations: {
    userForm: {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    },
  },
  methods: {
    async login() {
      const dataLogin = await AuthServices.login(this.userForm);
      this.handleSubmit();
      if (dataLogin === undefined) {
        this.textDanger = "true";
      } else if (dataLogin.code === 200) {
        if (this.checkSaveInfo === true) {
          this.saveInfo();
        }
        this.setUserInfo();
        this.showPopup = true;
      }
    },
    saveInfo() {
      if (this.userForm.email !== '' && this.userForm.password !== '') {
        localStorage.setItem('userInfo', JSON.stringify(this.userForm));
      }
    },
    async setUserInfo() {
      const userInfo = await AuthServices.me();
      localStorage.setItem('userInfoGlobal', JSON.stringify(userInfo.data.user));
      this.$store.dispatch('actionSetUserInfo', JSON.parse(localStorage.getItem('userInfoGlobal')));
    },
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
    handleShowPopup() {
      this.showPopup = false;
      this.$router.push("/");
    },
    showPassword() {
      if (this.type == "password") {
        this.type = 'text'
      }
      else { 
        this.type = 'password'
      }
    }
  },
  watch: {
    userForm: {
      handler: function () {
        this.textDanger = false;
      },
      deep: true,
    },
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem('userInfo'));
    if (data && data !== '') {
      this.userForm = data;
      this.checkSaveInfo = true;
    }
  }
};
</script>

<style scoped src="@/assets/css/login.css"></style>
