<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Report' },
        { name: 'User' },
      ]" />
      <div>
        <div class="">
          Reported User Found: {{ totalRecord }}
          <span v-if="totalRecord == 1">
            user
          </span>
          <span v-if="totalRecord > 1">
            users
          </span>
        </div>
        <v-row align="center" style="margin-top: 20px;">
          <v-col cols="5">
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="searchTypeSelect"
              :items="searchType"
              label="Search Content"
            ></v-select>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#FFBC00"
              @click="searchData()"
              style="font-size: 1.4rem;">
              <i class="las la-search"></i>
            </v-btn>
          </v-col>
          <v-col cols="3" sm="3" lg="2">
            <div class="searchdate-con" v-if="false">
              <v-text-field
                v-model="dates"
                label="Date range"
                prepend-icon="mdi-calendar"
                readonly></v-text-field>
              <div class="selectdate" @click="selectdate = !selectdate">
                <i class="las la-calendar" v-if="!selectdate"></i>
                <i class="las la-times" v-else></i>
              </div>
              <transition name="fade">
                <div class="datemodal" v-if="selectdate">
                  <v-date-picker color="#FFBC00" v-model="dates" range></v-date-picker>
                </div>
              </transition>
            </div>
          </v-col>
          <v-col cols="2" v-if="totalPage > 1">
            <v-select
              v-model="page"
              :items="totalPageArr(totalPage)"
              :menu-props="{ top: true, offsetY: true }"
              label="Page Select"
            ></v-select>
          </v-col>
        </v-row>
        <v-data-table
          :color="primary"
          :loading="loading"
          :headers="headers"
          :items="users"
          item-key="name"
          :search="search"
          :itemsPerPage="itemsPerPage"
          hide-default-footer
        >
        <template v-slot:item.updatedAt="{ item }">
          <div class="dateout-box">
            <div class="time-box">
              <div class="icon">
                <i class="las la-clock"></i>
              </div>
              <div class="textinner">
                {{ timeget(item.updatedAt) }}
              </div>
            </div>
            <div class="date-box">
              <div class="icon">
                <i class="las la-calendar-alt"></i>
              </div>
              <div class="textinner">
                {{ dateget(item.updatedAt) }}
              </div>
            </div>
          </div>
        </template>
          <template v-slot:item.reporterUsername="{ item }">
            <nuxt-link :to="'/users/'+item.reporterUuid" class="linkusername">
              {{ ectext(item.reporterUsername) }}
            </nuxt-link>
          </template>
          <template v-slot:item.reportedUsername="{ item }">
            <nuxt-link :to="'/users/'+item.reportedUuid" class="linkusername">
              {{ ectext(item.reportedUsername) }}
            </nuxt-link>
          </template>
          <template v-slot:item.status="{ item }">
            <div class="banned">
                <i class="las la-user-slash"></i>
                Banned
            </div>
          </template>
          <template v-slot:item.function="{ item }">
            <div class="function-con">
                <nuxt-link class="function-box t2" :to="'/userpost/'+item.reportedUuid">
                  <div class="icon">
                    <i class="las la-eye"></i>
                  </div>
                  <div class="text">
                    View Post
                  </div>
                </nuxt-link>
            </div>
          </template>
        </v-data-table>
        <v-col cols="2" v-if="totalPage > 1">
          <v-select
            v-model="page"
            :items="totalPageArr(totalPage)"
            :menu-props="{ top: true, offsetY: true }"
            label="Page Select"
          ></v-select>
        </v-col>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Breadbar from "~/components/Breadbar.vue";
export default {
  components: [ Breadbar ],
  computed: {
    ...mapState(["accessToken", "primary"]),
  },
  watch: {
    page () {
      this.getUsers(this.page,'normal',200)
    }
  },
  data() {
    return {
      search: '',
      selectdate: false,
      dates: '',
      searchTypeSelect: '',
      pageSize: 200,
      page: 1,
      itemsPerPage: 30,
      totalRecord: 0,
      totalPage: 0,
      loading: true,
      search: '',
      searchType: [
        { text: 'uid', value: 'uid' },
        { text: 'chatbee ID', value: 'username' },
        { text: 'Reporter', value: 'reporterUsername' },
        { text: 'Reporter', value: 'reportedUsername' },
      ],
      headers: [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Reporter', value: 'reporterUsername' },
        { text: 'Reported', value: 'reportedUsername' },
        { text: 'Reported Date', value: 'updatedAt' },
        { text: 'Reason', value: 'reason' },
        { text: 'status', value: 'status' },
        { text: 'Action', value: 'function' },
      ],
      users: []
    }
  },
  mounted () {
    this.getUsers(1,'normal',200)
  },
  methods: {
    searchData () {
      if (this.search != '' && this.searchTypeSelect != '') {
        this.getUsers(1,'search',200)
      }
    },
    totalPageArr (totalPage) {
      let data = []
      for (var i = 1; i <= totalPage; i++) {
        data.push(i)
      }
      return data
    },
    dateget (text) {
      if (text) {
        var newtext = text.split("T")
        var newtext = newtext[0].split(".")
        return newtext[0]
      } else {
        return '-'
      }
    },
    timeget (text) {
      if (text) {
        var newtext = text.split("T")
        newtext = newtext[1].replace("z", "")
        newtext = newtext.replace("Z", "")
        newtext = newtext.split(".")
        return newtext[0]
      } else {
        return '-'
      }
    },
    ectext (text) {
      if (text) {
        if (text.length > 8) {
            return text.slice(0,8)+'...'
        } else {
            return text
        }
      } else {
        return "-"
      }
    },
    getUsers(pageSelect,status,pageSize) {
      this.users = []
      this.loading = true
      let apiurl
      if (status == 'normal') {
        apiurl = '/v1/report-users.all?page='+pageSelect+'&pageSize=200'
      } else {
        apiurl = '/v1/report-users.all?page='+pageSelect+'&pageSize='+pageSize+'&'+this.searchTypeSelect+'='+this.search
      }
      this.$axios.$get(apiurl, {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        console.log(response)
        this.loading = false
        if (response.data && response.data != null) {
          this.users = response.data
          if (status == 'normal') {
            this.totalRecord = response['_metadata'].totalRecords
            this.totalPage = response['_metadata'].totalPages
          } else {
            this.totalRecord = this.users.length
            this.totalPage = Math.ceil(this.users.length / 200)
          }
        } else {
          this.users = []
          this.totalRecord = 0
          this.totalPage = 1
        }
      }).catch((error) => {
        this.loading = false
      })
    },
    viewUser () {
      this.$router.push({
        path: '/users/3X11241233'
      });
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
.function-con {
  //text-align: right;
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
.banned {
  color: $error;
}
</style>
