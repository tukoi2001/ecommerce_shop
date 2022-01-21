<template>
  <div class="wrapper">
    <div class="container">
      <div class="row content__register">
        <div class="col-md-6 content__register-form">
          <form class="form__register" @submit.prevent="register">
            <span class="form__title"> Register </span>
            <div class="form__email">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.firstName"
                type="text"
                placeholder="First Name"
                class="form__email-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.firstName.$error,
                }"
              />
              <span class="form__email-symbol">
                <b-icon icon="person"></b-icon>
              </span>
              <div
                v-if="submitted && !$v.userForm.firstName.required"
                class="invalid-feedback"
              >
                First Name is required
              </div>
            </div>
            <div class="form__email">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.lastName"
                type="text"
                placeholder="Last Name"
                class="form__email-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.lastName.$error,
                }"
              />
              <span class="form__email-symbol">
                <b-icon icon="person"></b-icon>
              </span>
              <div
                v-if="submitted && !$v.userForm.lastName.required"
                class="invalid-feedback"
              >
                Last Name is required
              </div>
            </div>
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
                type="password"
                placeholder="Password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.password.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
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
            <div class="form__password">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.confirmPassword"
                type="password"
                placeholder="Repeat your password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.confirmPassword.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock-fill"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.confirmPassword.required"
                  >Confirm Password is required</span
                >
                <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword"
                  >Passwords must match</span
                >
              </div>
            </div>
            <div class="form__check">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                v-model.trim="checkTerms"
              />
              <label
                class="form-check-label form__label"
                for="flexCheckDefault"
              >
                I agree all statements in Terms of Conditions
              </label>
              <div class="form__forget text-start pt-3" v-if="textDanger">
                <span class="form__forget-danger danger">
                  Làm ơn tích vào điều khoản sử dụng!
                </span>
              </div>
            </div>
            <div class="form__btn">
              <button type="submit" class="form__btn-submit">register</button>

              <div class="form__forget text-center pt-3" v-if="textDangerRegister">
              <span class="form__forget-danger danger register">
                  Email đã được đăng ký! Xin vui lòng nhập email khác!
                  </span>
            </div>
            </div>
            <div class="text-center pt-5">
              <router-link to="/login" class="form__register"
                >Already have an account
                <b-icon icon="arrow-right-circle"></b-icon>
              </router-link>
            </div>
          </form>
        </div>
        <div class="content__register-img col-md-6">
          <img src="@/assets/images/login/embe.png" alt="" />
        </div>
      </div>
    </div>
    <popup @hidePopup="handleShowPopup" v-if="showPopup">
      <template #default>
        <p class="slot__para">Đăng ký tài khoản thành công!</p>
      </template>
      <template #actions @hidePopup="handleShowPopup"> </template>
    </popup>
    <scroll-top-arrow/>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import AuthServices from "@/services/auth-service.js";
import Popup from '../components/common/Popup.vue';
import ScrollTopArrow from '../components/common/ScrollTopArrow.vue';
export default {
  name: "Register",
  components: {Popup, ScrollTopArrow},
  data() {
    return {
      userForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      checkTerms: "",
      textDanger: false,
      showPopup: false,
      textDangerRegister: false,
    };
  },
  validations: {
    userForm: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    async register() {
      this.handleSubmit();
      this.showCheckTerms();
        if(this.checkTerms === true) {
            const dataRegister = await AuthServices.register(this.userForm);
            if (!dataRegister) {
                this.textDangerRegister = true;
            }
            else if (dataRegister.code === 200) {
              this.showPopup = true;
            }
        }
      
    },
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
    showCheckTerms() {
      if (this.checkTerms === "" || this.checkTerms === false) {
          this.textDanger = true;
      } else {
          this.textDanger = false;
      }
    },
    handleShowPopup() {
      this.showPopup = false;
      this.$router.push("/login");
    }
  },
  watch: {
    checkTerms() {
      if (this.checkTerms === true) {
        this.textDanger = false;
      }
    },
    'userForm.email': {
        handler: function () {
        this.textDangerRegister = false;
      },
        deep: true,
    },
  }
};
</script>

<style scoped src="@/assets/css/register.css">
</style>