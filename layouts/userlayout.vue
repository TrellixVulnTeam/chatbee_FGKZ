<template>
  <v-app>
    <Alertmodal />
    <v-main class="main-layout" :class="navstyle">
      <transition name="fade">
        <Nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alertmodal from "~/components/Alertmodal.vue";
import Menubar from "~/components/Menubar.vue";
export default {
  name: "userlayout",
  components: {
    Alertmodal,
    Menubar
  },
  computed: {
    ...mapState(["loadingMain", "alertmodal", "navstyle"]),
  },
  data() {
    return {
      usermodal: false
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

.main-layout {
  position: relative;
  &.place {
    padding-top: 100px !important;
    display: block;
  }
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
</style>
