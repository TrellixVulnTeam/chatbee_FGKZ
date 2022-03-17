<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Infection' },
        { name: 'Stat' },
      ]" />
      <div>
        <v-tabs color="#FFBC00">
          <v-tab @click="statusselect = 1">Stat by User</v-tab>
          <v-tab @click="statusselect = 2">Stat by All</v-tab>
        </v-tabs>
        <div class="status-con" v-if="statusselect == 1">
          <Statuser />
        </div>
        <div class="status-con" v-if="statusselect == 2">
          <Statall />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadbar from "~/components/Breadbar.vue";
import Statuser from "~/components/Statuser.vue";
import Statall from "~/components/Statall.vue";
export default {
  name: "homepage",
  components: [ Breadbar, Statuser, Statall ],
  data () {
    return {
      statusselect: 1,
    }
  },
  methods: {
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
.function-con {
  .function-box {
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    background-color: $primary;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    .icon {
      display: inline-block;
      vertical-align: middle;
    }
    .text {
      display: inline-block;
      font-size: 0.7rem;
      vertical-align: middle;
    }
    &:hover {
      background-color: $primary;
      opacity: 0.5;
      color: #fff;
    }
  }
}
.username-prev {
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background-color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
