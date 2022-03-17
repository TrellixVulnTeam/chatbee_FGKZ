<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Infection' },
        { name: 'Setting' },
      ]" />
      <div>
        <v-tabs color="#FFBC00">
          <v-tab @click="statusselect = 1">Wordlist</v-tab>
          <v-tab @click="statusselect = 2">Rule</v-tab>
        </v-tabs>
        <div class="status-con" v-if="statusselect == 1">
          <Wordlist />
        </div>
        <div class="status-con" v-if="statusselect == 2">
          <Rule />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadbar from "~/components/Breadbar.vue";
import Wordlist from "~/components/Wordlist.vue";
import Rule from "~/components/Rule.vue";
export default {
  name: "homepage",
  components: [ Breadbar, Wordlist, Rule ],
  data() {
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
  //text-align: right;
  .function-box {
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}
.status {
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  display: inline-block;
  &.active {
    background-color: $correct;
  }
  &.deactive {
    background-color: $error;
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
