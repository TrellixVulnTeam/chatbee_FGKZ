<template>
  <div class="alert-modal-con middle-item" v-if="alertmodal != false">
    <div class="modal-box">
      <div class="text">
        {{ alertmodal.text }}
      </div>
      <div class="button-con">
        <button class="t2" type="button" @click="closeModal()">
          ปิดหน้าต่างนี้
        </button>
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
    ...mapState(["alertmodal"]),
  },
  watch: {
  },
  methods: {
    closeModal () {
      this.$nuxt.$store.commit('SET_ALERTMODAL', false)
    }
  }
};
</script>
<style lang="scss" scoped>
  .alert-modal-con {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100000;
    background-color: rgba(0,0,0,0.5);
    .modal-box {
      width: 400px;
      background-color: #fff;
      border-radius: 15px;
      padding: 40px;
      .text {
        width: 100%;
        font-size: 1.3rem;
        line-height: 1.6rem;
      }
      .button-con {
        width: 100%;
        text-align: center;
        margin-top: 20px;
        button {
          display: inline-block;
          height: 45px;
          line-height: 45px;
          padding-left: 30px;
          padding-right: 30px;
          max-width: 100%;
          color: #fff;
          border-radius: 100px;
          font-size: 400;
          font-size: 1rem;
          background-color: $primary;

        }
      }
    }
  }
</style>
