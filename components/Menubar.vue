<template>
  <div class="menubar-con">
    <transition name="fadeintro">
      <div class="menu-setting-con" v-if="menusetting">
        <div class="menu-setting-box" @click="logout()">
          Logout
        </div>
      </div>
    </transition>
    <div class="header-menu">
      <div class="logo-con">
        <div class="menu-list"
          v-if="false"
          @click="setExpand()"
          :class="{ 'hide': expand == false }">
          <div class="menu-list-inner t2">
            <div class="line line1 t2"></div>
            <div class="line line2 t2"></div>
            <div class="line line3 t2"></div>
          </div>
        </div>
        <img src="/chatbee-logo.png">
        <div class="logo-text">
          Welcome to Admin Panel!
        </div>
      </div>
      <div class="account-con">
        <!-- <div class="user-image" style="background:url('/79077270_1570543153152842_505157546427616553_n.jpg'); background-size: cover; background-position: 50% 50%;">
        </div>
        <div class="user-name">
          Udompol Thivakorakot
        </div> -->
        <div class="setting t2"
          @click="menusetting = !menusetting"
          :class="{ 'active': menusetting }">
          <i class="las la-sliders-h"></i>
        </div>
      </div>
    </div>
    <div class="menubar-inner-con" :class="{ 'hidebar': expand == false }">
      <div class="logo-section">
        <img src="/chatbee-logo-full-w.png">
      </div>
      <div class="menubar"
        v-for="menu in menus"
        v-if="menu.show != false"
        :class="{ 'active': menu.expand }">
        <nuxt-link :to="menu.link"
          class="menubar-header t2"
          v-if="!menu.child">
          <div class="icon">
            <i :class="menu.icon"></i>
          </div>
          <div class="text" v-if="expand">
            {{ menu.name }}
          </div>
        </nuxt-link>
        <div class="menubar-header t2"
          v-if="menu.child"
          @click="menu.expand = !menu.expand">
          <div class="icon">
            <i :class="menu.icon"></i>
          </div>
          <div class="text" v-if="expand">
            {{ menu.name }}
          </div>
          <div class="arrow" v-if="menu.child">
            <i class="las la-angle-down"></i>
          </div>
        </div>
        <div class="childmenu" v-if="menu.child && menu.expand == true">
          <nuxt-link :to="child.link" class="childmenu-box" v-for="child in menu.child">
            {{ child.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, { name: '$_', lodash })
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      'auth','expand'
    ]),
    path () {
      return this.$route.path
    }
  },
  data () {
    return {
      menusetting: false,
      menus: [
        { name: 'Dashboard', link: '/', icon: 'las la-chart-line' },
        {
          name: 'Users', link: '/users' ,icon: 'las la-user',
          expand: true,
          child: [
              { name: 'Users list' , link: '/users' },
              { name: 'ฺBlacklist' , link: '/users/blacklist' },
          ]
        },
        { name: 'Post List', link: '/postlist', icon: 'las la-list-ul' },
        {
          name: 'Timeline Report', link: '/report', icon: 'las la-calendar',
          expand: true,
          child: [
            { name: 'Report User' , link: '/report/user' },
            { name: 'Report Post' , link: '/report/post' },
          ]
        },
        {
          name: 'Infections', link: '/infections', icon: 'las la-hand-paper',
          show: false,
          expand: true,
          child: [
              { name: 'Infections Stat' , link: '/infection/stat' },
              { name: 'Infections Setting' , link: '/infection/setting' },
          ]
        },
        { name: 'Content', link: '/content', icon: 'las la-newspaper', show: false },
        { name: 'Sticker', link: '/sticker', icon: 'las la-otter', show: false },
        { name: 'Setting', link: '/setting', icon: 'las la-cog',
          expand: false,
          show: false,
          child: [
              { name: 'Member' , link: '/setting/member' },
          ]
        },
      ]
    }
  },
  watch: {
  },
  methods: {
    logout () {
      this.$nuxt.$store.commit('SET_TOKEN', '')
      this.$router.push({
        path: '/login'
      })
      this.menusetting = false
    },
    setExpand () {
      this.$nuxt.$store.commit("SET_EXPAND_TOGGLE")
    },
  }
};
</script>
<style lang="scss" scoped>
  .menubar-con {
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 10000;
    .header-menu {
      height: 50px;
      right: 10px;
      top: 10px;
      z-index: 5000;
      position: absolute;
      // box-shadow: 0px 5px 20px -10px rgba(0,0,0,0.25);
      // -webkit-box-shadow: 0px 5px 20px -10px rgba(0,0,0,0.25);
      // -moz-box-shadow: 0px 5px 20px -10px rgba(0,0,0,0.25);
      overflow: hidden;
      border-radius: 100px;
      //border: 1px $primary solid;
      overflow: hidden;
      .account-con {
        position: relative;
        z-index: 1000;
        height: 100%;
        //background-color: $primary;
        background-color: #fff;
        top: 0px;
        line-height: 50px;
        padding-left: 9px;
        padding-right: 50px;
        .setting {
          display: inline-block;
          vertical-align: middle;
          height: 30px;
          width: 30px;
          color: #fff;
          text-align: center;
          line-height: 31px;
          font-size: 1.2rem;
          background-color: rgba(0,0,0,0.3);
          position: absolute;
          right: 10px;
          top: 11px;
          border-radius: 100px;
          cursor: pointer;
          &:hover {
            background-color: rgba(255,255,255,0.5);
            color: #111;
          }
          &.active {
            background-color: rgba(0,0,0,1);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
            color: $primary;
          }
        }
        .user-image {
          height: 35px;
          width: 35px;
          border-radius: 100%;
          display: inline-block;
          border: 1px $primary solid;
          vertical-align: middle;
        }
        .user-name {
          display: inline-block;
          margin-left: 5px;
          color: #000;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: Montserrat;
          vertical-align: middle;
        }
      }
      .logo-con {
        height: 60px;
        padding-left: 15px;
        padding-right: 20px;
        line-height: 65px;
        vertical-align: middle;
        display: none;
        .logo-text {
          vertical-align: middle;
          font-size: 0.9rem;
          font-weight: 600;
          color: #222;
          display: inline-block;
          margin-left: 10px;
        }
        .menu-list {
          width: 40px;
          height: 40px;
          vertical-align: middle;
          background-color: rgba(0,0,0,0.3);
          display: inline-block;
          margin-right: 10px;
          border-radius: 10px;
          cursor: pointer;
          z-index: 1000;
          position: relative;
          .line {
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: #fff;
            top: 50%;
            margin-left: 8px;
            margin-top: 1px;
            &.line1 {
              top: 30%;
              margin-top: 0px;
            }
            &.line2 {
              top: 50%;
              margin-top: -1px;
            }
            &.line3 {
              top: 70%;
              margin-top: -2px;
            }
          }
          &.hide {
            .line {
              width: 14px;
              &.line1 {
                transform: rotate(-45deg);
                margin-top: 2.5px;
              }
              &.line2 {
                width: 18px;
                margin-left: 9.5px;
                border-radius: 10px;
              }
              &.line3 {
                margin-top: -4px;
                transform: rotate(45deg);
              }
            }
          }
        }
        img {
          height: 40px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .menubar-inner-con {
      width: 200px;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #fff;
      z-index: 1000;
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
      -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
      -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
      .nuxt-link-exact-active {
        border-right: 3px $primary solid;
        background-color: #FFF4D4 !important;
      }
      &.hidebar {
        width: 50px;
      }
    }
    .logo-section {
      padding: 15px;
      text-align: center;
      background-color: $primary;
      img {
        height: 50px;
      }
    }
    .menubar-setting {
      width: 100%;
      height: 45px;
      line-height: 45px;
      display: block;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      padding: 6px;
      .inner {
        width: 100%;
        background-color: #555;
        padding-left: 10px;
        border-radius: 5px;
      }
      //border-bottom: 1px #eee solid;
      .icon {
        display: inline-block;
        color: $primary;
        font-size: 1.3rem;
        vertical-align: middle;
        //background-color: #eee;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        margin-right: 3px;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-size: 0.7rem;
        font-weight: 600;
      }
    }
    .menubar {
      &.active {
        background-color: #f0f0f0;
        .childmenu {
          border-top: 1px $primary solid;
          border-bottom: 1px $primary solid;
        }
        .menubar-header {
          background-color: #f8f8f8;
          .arrow {
            transform: rotate(-180deg);
          }
        }
      }
      .childmenu {
        .childmenu-box {
          width: 100%;
          padding-left: 30px;
          height: 45px;
          line-height: 45px;
          color: #000;
          font-size: 0.75rem;
          display: block;
          text-transform: uppercase;
        }
      }
      .menubar-header {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 8px;
        background-color: #fff;
        display: block;
        text-decoration: none;
        color: #000;
        cursor: pointer;
        position: relative;
        //border-bottom: 1px #eee solid;
        .arrow {
          position: absolute;
          color: $primary;
          font-size: 1rem;
          height: 30px;
          line-height: 30px;
          right: 15px;
          top: 50%;
          margin-top: -15px;
        }
        .icon {
          display: inline-block;
          color: $primary;
          font-size: 1.3rem;
          vertical-align: middle;
          //background-color: #eee;
          height: 30px;
          width: 30px;
          border-radius: 5px;
          line-height: 30px;
          text-align: center;
          margin-right: 3px;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
          text-transform: uppercase;
          font-family: 'Montserrat';
          font-size: 0.7rem;
          letter-spacing: -0.4px;
          font-weight: 600;
          &.hidetext {
            //width: 0px;
          }
        }
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  .menu-setting-con {
    width: 200px;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    z-index: 10000;
    right: 20px;
    border-radius: 10px;
    top: 70px;
    overflow: hidden;
    .menu-setting-box {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 20px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: rgba(0,0,0,0.95);
        color: $primary;
      }
    }
  }
</style>
