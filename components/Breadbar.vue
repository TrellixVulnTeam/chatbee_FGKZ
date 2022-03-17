<template>
  <div class="breadbar-con">
    <div class="bread-box" v-for="(data, index) in datas">
      <div class="text">
        {{ data.name }}
      </div>
      <div class="arrow" v-if="index < (datas.length - 1)">
        <i class="las la-angle-right"></i>
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
  },
  watch: {
  },
  props: ['datas'],
  methods: {
  }
};
</script>
<style lang="scss" scoped>
  .breadbar-con {
    width: 100%;
    margin-bottom: 15px;
    border-bottom: 1px #eee solid;
    padding-bottom: 15px;
    .bread-box {
      display: inline-block;
      .text {
        display: inline-block;
        color: #000;
        font-size: 0.9rem;
        font-family: Montserrat;
        font-weight: 400;
      }
      .arrow {
        display: inline-block;
        color: $primary;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
</style>
