<template>
  <div class="page-wrapper">
    <div class="dashboard-con">
      <v-row>
        <v-col lg="12">
          <h1 class="titledash">
            Dashboard
          </h1>
        </v-col>
        <v-col lg="4" md="4" col="4">
          <div class="dashboard-box">
            <transition name="fade">
              <div class="frontload middle-item" v-if="totalUser == 0">
                <v-progress-circular indeterminate color="#FFBC00"></v-progress-circular>
              </div>
            </transition>
            <div class="name">
              Total Users
            </div>
            <div class="number">
              {{ numberFormat(totalUser) }}
            </div>
            <div class="after">
              Users
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="4" col="4">
          <div class="dashboard-box">
            <transition name="fade">
              <div class="frontload middle-item" v-if="totalUserBlacklist == 0">
                <v-progress-circular indeterminate color="#FFBC00"></v-progress-circular>
              </div>
            </transition>
            <div class="name">
              User Blacklists
            </div>
            <div class="number">
              {{ numberFormat(totalUserBlacklist) }}
            </div>
            <div class="after">
              Blacklists
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="4" col="4">
          <div class="dashboard-box">
            <transition name="fade">
              <div class="frontload middle-item" v-if="totalPost == 0">
                <v-progress-circular indeterminate color="#FFBC00"></v-progress-circular>
              </div>
            </transition>
            <div class="name">
              Posts
            </div>
            <div class="number">
              {{ numberFormat(totalPost) }}
            </div>
            <div class="after">
              posts
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="4" col="4">
          <div class="dashboard-box">
            <transition name="fade">
              <div class="frontload middle-item" v-if="totalReportPost == 0">
                <v-progress-circular indeterminate color="#FFBC00"></v-progress-circular>
              </div>
            </transition>
            <div class="name">
              Report Posts
            </div>
            <div class="number">
              {{ numberFormat(totalReportPost) }}
            </div>
            <div class="after">
              posts
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="4" col="4">
          <div class="dashboard-box">
            <transition name="fade">
              <div class="frontload middle-item" v-if="totalReportUser == 0">
                <v-progress-circular indeterminate color="#FFBC00"></v-progress-circular>
              </div>
            </transition>
            <div class="name">
              Report Users
            </div>
            <div class="number">
              {{ numberFormat(totalReportUser) }}
            </div>
            <div class="after">
              users
            </div>
          </div>
        </v-col>
        <v-col lg="12" v-if="false">
          <div class="dashboard-box">
            <div class="name">
              Whole Data
            </div>
            <div class="graph-con">
              <div class="graph-box">
                <svg height="300" width="100%">
                  <line x1="0" y1="0" x2="100" y2="10" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="100" y1="10" x2="200" y2="200" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="200" y1="200" x2="300" y2="120" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="300" y1="120" x2="400" y2="80" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="400" y1="80" x2="500" y2="99" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="500" y1="99" x2="600" y2="77" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="600" y1="77" x2="700" y2="153" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="700" y1="153" x2="800" y2="13" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="800" y1="13" x2="900" y2="0" style="stroke:#FFBC00;stroke-width:2" />
                  <line x1="900" y1="0" x2="1000" y2="50" style="stroke:#FFBC00;stroke-width:2" />
                </svg>
              </div>
              <div class="graph-box secondary-graph">
                <svg height="300" width="100%">
                  <line x1="0" y1="50" x2="100" y2="100" style="stroke:#aaa;stroke-width:2" />
                  <line x1="100" y1="100" x2="200" y2="220" style="stroke:#aaa;stroke-width:2" />
                  <line x1="200" y1="220" x2="300" y2="101" style="stroke:#aaa;stroke-width:2" />
                  <line x1="300" y1="101" x2="400" y2="80" style="stroke:#aaa;stroke-width:2" />
                  <line x1="400" y1="80" x2="500" y2="119" style="stroke:#aaa;stroke-width:2" />
                  <line x1="500" y1="119" x2="600" y2="7" style="stroke:#aaa;stroke-width:2" />
                  <line x1="600" y1="7" x2="700" y2="131" style="stroke:#aaa;stroke-width:2" />
                  <line x1="700" y1="131" x2="800" y2="94" style="stroke:#aaa;stroke-width:2" />
                  <line x1="800" y1="94" x2="900" y2="40" style="stroke:#aaa;stroke-width:2" />
                  <line x1="900" y1="40" x2="1000" y2="100" style="stroke:#aaa;stroke-width:2" />
                </svg>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "homepage",
  computed: {
    ...mapState(["accessToken"]),
  },
  data() {
    return {
      totalUser: 0,
      totalPost: 0,
      totalUserBlacklist: 0,
      totalReportPost: 0,
      totalReportUser: 0
    };
  },
  mounted () {
    this.getUsers()
    this.getBlacklistUsers()
    this.getPosts()
    this.getReportPosts()
    this.getReportUsers()
  },
  methods: {
    numberFormat (number) {
      let numberSet = number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      numberSet = numberSet.replace(".0", "");
      return numberSet
    },
    getUsers() {
      this.totalUser = 0
      this.$axios.$get('/v1/users.information.all?page=1&pageSize=1', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        console.log(response)
        this.totalUser = response['_metadata'].totalRecords
      }).catch((error) => {})
    },
    getBlacklistUsers() {
      this.totalUser = 0
      this.$axios.$get('/v1/users-blacklists.all?page=1&pageSize=1', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.totalUserBlacklist = response['_metadata'].totalRecords
      }).catch((error) => {})
    },
    getPosts() {
      this.totalUser = 0
      this.$axios.$get('/v1/posts.all?page=1&pageSize=1', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.totalPost = response['_metadata'].totalRecords
      }).catch((error) => {})
    },
    getReportPosts() {
      this.totalUser = 0
      this.$axios.$get('/v1/report-posts.all?page=1&pageSize=1', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.totalReportPost = response['_metadata'].totalRecords
      }).catch((error) => {})
    },
    getReportUsers() {
      this.totalUser = 0
      this.$axios.$get('/v1/report-users.all?page=1&pageSize=1', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.totalReportUser = response['_metadata'].totalRecords
      }).catch((error) => {})
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
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
  .dashboard-box {
    width: 100%;
    padding: 40px;
    padding-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
    -webkit-box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 6px 25px -10px rgba(0,0,0,0.35);
    margin-top: 10px;
    position: relative;
    border-left: 2px $primary solid;
    .frontload {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      background-color: rgba(255,255,255,0.6);
      top: 0px;
      left: 0px;
    }
    .name {
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      opacity: 0.5;
    }
    .number {
      font-size: 2rem;
      line-height: 2.2rem;
      font-weight: 400;
      text-align: right;
      color: $primary;
    }
    .after {
      font-size: 1.1rem;
      line-height: 1.2rem;
      font-weight: 400;
      text-align: right;
      color: #000;
    }
  }
  .graph-con {
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border-bottom: 1px #eee solid;
    position: relative;
    background-color: transparent;
  }
  .graph-box {
    width: 100%;
    height: 300px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 200;
    &.secondary-graph {
      opacity: 0.5;
      z-index: 100;
    }
  }
  .dashboard-con {
    padding: 20px;
  }
  .titledash {
    font-size: 2.4rem;
    font-weight: 400;
  }
</style>
