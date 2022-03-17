<template>
  <div class="login-con">
      <div class="login-modal-con middle-item">
        <div class="login-modal">
        <div class="logo">
          <img src="/chatbee-logo-full.png">
        </div>
        <div class="title">
          LOGIN TO ADMIN PANEL
        </div>
        <form>
          <div class="input-box">
            <v-text-field
              color="#FFBC00"
              label="Username"
              v-model="username"
              hide-details="auto"></v-text-field>
          </div>
          <div class="input-box">
            <v-text-field
              color="#FFBC00"
              v-model="password"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              :type="passwordShow ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="passwordShow = !passwordShow"
            ></v-text-field>
          </div>
          <div class="input-box">
            <v-btn
              depressed
              large
              width="100%"
              color="#FFBC00"
              @click="loginuser()">
              LOGIN
            </v-btn>
          </div>
        </form>
      </div>
      </div>
      <div class="image-background"
        style="background: url('https://images.unsplash.com/photo-1554774853-b415df9eeb92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'); background-size: cover; background-position: 50% 50%;">
      </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "login",
  layout: "userlayout",
  middleware: ['auth'],
  computed: {
    ...mapState([
      'auth',
    ])
  },
  data() {
    return {
      expand: false,
      username: '',
      password: '',
      passwordShow: false,
    };
  },
  methods: {
    loginuser() {
      this.$axios.$post('/v1/login', {
          username: this.username,
          password: this.password
      }).then((response) => {
        console.log(response)
        this.$nuxt.$store.commit('SET_TOKEN', response.data.accessToken)
        this.$router.replace({path: '/'})
      }).catch((error) => {
        this.$nuxt.$store.commit('SET_ALERTMODAL', {
          text: 'username หรือ password ผิดพลาด'
        })
      })
    },
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    },
    redirectTo(path) {
      this.$router.replace({ path });
    }
  }
};
</script>
<style lang="scss" scoped>
  @keyframes beefly {
    0%   {margin-top:0px;}
    50%  {margin-top:-7px;}
    100% {margin-top:0px;}
  }
  .login-con {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #eee;
    .image-background {
      width: 50vw;
      height: 100%;
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 100;
    }
    .login-modal-con {
      width: 50vw;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 1000;
      background-color: #fff;
      box-shadow: 0px 14px 30px -16px rgba(0,0,0,0.45);
      -webkit-box-shadow: 0px 14px 30px -16px rgba(0,0,0,0.45);
      -moz-box-shadow: 0px 14px 30px -16px rgba(0,0,0,0.45);
    }
    .login-modal {
      width: 500px;
      background-color: #fff;
      padding: 50px;
      .logo {
        text-align: left;
        height: 60px;
        margin-bottom: 20px;
        position: relative;
        img {
          position: absolute;
          height: 60px;
          // animation-name: beefly;
          // animation-duration: 1.2s;
          // animation-iteration-count: infinite;
          // animation-timing-function: linear;
        }
      }
      .title {
        width: 100%;
        text-align: left;
        font-size: 1.4rem;
        line-height: 1.6rem;
      }
      .input-box {
        width: 100%;
        margin-top: 25px;
      }
    }
  }
</style>
