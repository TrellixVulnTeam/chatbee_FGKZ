<template>
  <v-app>
    <!-- <transition name="fade">
      <div class="loadingmain-con middle-item">
        <img src="/loading-min.gif" width="90">
      </div>
    </transition> -->
    <Alertmodal />
    <Menubar />
    <v-main class="main-layout">
      <div class="layout-con" :class="{ 'hidelayout': expand == false }">
        <transition name="fade">
          <Nuxt />
        </transition>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alertmodal from "~/components/Alertmodal.vue";
import Menubar from "~/components/Menubar.vue";
export default {
  name: "default-layout",
  middleware: ['auth'],
  components: {
    Alertmodal,
    Menubar
  },
  computed: {
    ...mapState(["expand"]),
  },
  data() {
    return {
    }
  },
  watch: {
    $route() {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="scss">

.dateout-box {
  width: 100%;
  .time-box {
    background-color: #fff;
    border: 1px $primary solid;
  }
  .date-box {
    background-color: #fff;
    border: 1px $primary solid;
  }
  .time-box, .date-box {
    display: inline-block;
    position: relative;
    padding-left: 25px;
    height: 20px;
    border-radius: 100px;
    text-align: center;
    width: 110px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 10px;
    .icon {
      display: inline-block;
      font-size: 0.9rem;
      position: absolute;
      left: 0px;
      top: 50%;
      height: 20px;
      width: 20px;
      padding-right: 1px;
      line-height: 22px;
      margin-top: -10px;
      border-radius: 100px;
      background-color: $primary;
      color: rgba(0,0,0,0.6);
    }
    .textinner {
      display: block;
      font-weight: 400;
      text-align: left;
      font-size: 0.7rem;
      line-height: 20px;
    }
  }
}

.button-add-con {
  width: 100%;
  text-align: right;
  padding-top: 10px;
  padding-bottom: 15px;
}

a {
  &:hover {
    color: $primary;
  }
}

.elevation-1 {
  td {
    font-size: 0.8rem !important;
    font-weight: 600;
  }
}

.line-divider {
  width: 100%;
  height: 1px;
  background-color: $primary;
  margin-top: 25px;
}

.headtitle {
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: left;
}

.subheadtitle {
  font-size: 1.3rem;
  margin-top: 30px;
  margin-bottom: 15px;
  text-align: left;
}

.contentdata-box {
  margin-bottom: 10px;
  .button-con {
    text-align: left;
    &.right {
      text-align: right;
    }
  }
  .contentdata-label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #aaa;
    margin-bottom: 5px;
    text-transform: uppercase;
    text-align: left;
  }
  .contentdata-value {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    text-align: left;
    height: 45px;
    position: relative;
    width: 100%;
    &.image {
      height: auto;
    }
    .icon-right {
      position: absolute;
      height: 30px;
      width: 30px;
      background-color: $primary;
      border-radius: 100px;
      line-height: 30px;
      text-align: center;
      top: 50%;
      margin-top: -15px;
      right: 10px;
      color: #fff;
      cursor: pointer;
    }
    input {
      width: 100%;
      height: 55px;
      border-radius: 3px;
      background-color: #fff;
      border: 1px #999 solid;
      padding-left: 15px;
      font-weight: 200;
    }
    &.autoheight {
      height: auto !important;
    }
    &.none-input {
      input {
        width: auto !important;
        height: 45px;
        border-radius: 3px;
        background-color: transparent !important;
        border: 0px #eee solid !important;
        padding-left: 0px !important;
        font-weight: 200;
      }
    }
  }
  &.inlinecontent {
    .contentdata-label {
      font-size: 0.7rem;
      font-weight: 600;
      color: #aaa;
      margin-bottom: 5px;
      text-transform: uppercase;
      text-align: left;
      height: 45px;
      line-height: 45px;
      display: inline-block;
    }
    .contentdata-value {
      display: inline-block;
      width: auto;
      margin-left: 10px;
    }
  }
}

.status {
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  padding-left: 6px;
  padding-right: 6px;
  color: #fff;
  display: inline-block;
  font-size: 0.7rem;
  &.active {
    background-color: $correct;
  }
  &.deactive {
    background-color: $error;
  }
}

.noimage {
  background-color: transparent !important;
  overflow: visible !important;
}

.image-prev-outer {
  width: 120px;
  background-color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  .counter {
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: #000;
    height: 25px;
    border-radius: 100px;
    padding-left: 8px;
    padding-right: 8px;
    z-index: 1000;
    .icon {
      height: 25px;
      line-height: 25px;
      color: #fff;
      display: inline-block;
      font-size: 0.8rem;
    }
    .text {
      height: 25px;
      line-height: 25px;
      color: #fff;
      display: inline-block;
      font-size: 0.8rem;
    }
  }
  .image-prev {
    width: 100%;
    background-color: #eee;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  }
  .rect {
    width: 100%;
  }
  .image-prev-noblur {
    width: 100%;
    background-color: #eee;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      min-width: 100%;
      min-height: 100%;
    }
  }
  &:hover {
    .image-prev {
      filter: blur(0px);
      -webkit-filter: blur(0px);
    }
  }
}

.linkusername {
  cursor: pointer;
  color: $primary;
}

.searchdate-con {
  position: relative;
  .selectdate {
    height: 30px;
    width: 30px;
    z-index: 1000;
    position: absolute;
    line-height: 30px;
    text-align: center;
    right: 0px;
    top: 50%;
    margin-top: -25px;
    background-color: $primary;
    font-size: 1.3rem;
    color: #fff;
    border-radius: 100px;
    cursor: pointer;
  }
  .datemodal {
    position: absolute;
    z-index: 1000;
    left: 0px;
    box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.55);
    -webkit-box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 12px 20px -10px rgba(0,0,0,0.55);
  }
}

.page-wrapper {
  padding: 30px;
}

.page-section {
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
  -webkit-box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
}
.layout-con {
  padding-left: 200px;
  padding-top: 40px;
  display: block;
  position: relative;
  &.hidelayout {
    padding-left: 50px;
  }
}
.main-layout {
  background-color: #fff;
  //background-color: #8C8E93;
  width: 100%;
  min-height: 100vh;
}

.loadingmain-con {
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
  z-index: 20000;
  background-color: rgba(0,0,0,0.7);
  img {
    animation-name: loadingMain;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
}
@keyframes loadingMain {
  0%   {
    opacity: 0.7;
  }
  50%  {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}


.default-layout {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  margin: 0px;
  //padding-top: 90px;
  @media (max-width: $mobile-size) {
    //padding-top: 80px;
  }
}

.fade-usernav-enter-active {
  transition: all 0.2s ease;
}
.fade-usernav-leave-active {
  transition: all 0.2s ease;
}
.fade-usernav-enter {
  transform: translateY(-20px);
  opacity: 0;
}
.fade-usernav-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.global-loading {
  position: absolute;
  z-index: 20000;
  width: 100%;
  height: 100%;
  background: rgb(61, 61, 61, 0.6);
  .loading-icon {
    width: 200px;
    padding-top: 40vh;
    margin: auto;
    display: block;
  }
}
.datepicker-modal {
  position: fixed;
  z-index: 50000;
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
</style>
