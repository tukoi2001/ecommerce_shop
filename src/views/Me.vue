<template>
  <div class="wrapper">
    <div class="header__me">
      <div class="container">
        <router-link to="/" class="me__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="me__title">Tài Khoản của tôi</span>
      </div>
    </div>

    <div class="me__box">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <ul class="me__nav">
                        <li class="me__item" :class="{active: currentTab == 'order'}" @click="currentTab = 'order'">
                            <b-icon icon="cart-fill" class="me__icon"></b-icon> Đơn hàng
                        </li>
                        <li class="me__item" :class="{active: currentTab == 'info'}" @click="currentTab = 'info'">
                            <b-icon icon="person-fill" class="me__icon"></b-icon> Chi tiết tài khoản
                        </li>
                        <li class="me__item" :class="{active: currentTab == 'password'}" @click="currentTab = 'password'">
                            <b-icon icon="key-fill" class="me__icon"></b-icon> Đổi mật khẩu
                        </li>
                        <li class="me__item" @click="logout">
                            <b-icon icon="box-arrow-in-right" class="me__icon"></b-icon> Đăng xuất
                        </li>
                    </ul>
                </div>

                <div class="col-md-9">
                    <order v-if="currentTab == 'order'"></order>
                    <account 
                    v-if="currentTab == 'info'"
                    :firstName="userInfo.firstname"
                    :lastName="userInfo.lastname"
                    :email="userInfo.email"
                    ></account>
                    
                    <chang-password v-if="currentTab == 'password'"></chang-password>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AuthServices from "@/services/auth-service.js";
import Order from '../components/me/Order.vue';
import Account from '../components/me/Account.vue';
import ChangPassword from '../components/me/ChangPassword.vue';
export default {
  components: { Order, Account, ChangPassword },
  name: "Me",
  data() {
    return {
      userInfo: [],
      currentTab: 'order'
    };
  },
  async mounted() {
    await this.me();
  },
  methods: {
    async me() {
      const dataMe = await AuthServices.me();
      if (dataMe && dataMe.code === 200) {
        this.userInfo = dataMe.data.user;
      } else {
        this.$router.push("/login");
      }
    },
    async logout() {
        const dataLogout = await AuthServices.logout();
        console.log(dataLogout)
        if (dataLogout.code == 200) {
            this.$store.dispatch('actionSetUserInfo', null);
            localStorage.setItem('userInfoGlobal', '');
            this.$router.push('/');
            alert("Đăng xuất thành công!");
        }
    }
  },
};
</script>

<style scoped src="@/assets/css/me.css">
</style>