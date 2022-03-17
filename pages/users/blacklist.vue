<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Users Blacklist' },
      ]" />
        <div class="">
          Blacklist Found: {{ totalRecord }}
          <span v-if="totalRecord == 1">
            blacklist
          </span>
          <span v-if="totalRecord > 1">
            blacklists
          </span>
        </div>
        <v-row align="center" style="margin-top: 20px;">
          <v-col lg="5">
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col lg="2">
            <v-select
              v-model="searchTypeSelect"
              :items="searchType"
              label="Search Content"
            ></v-select>
          </v-col>
          <v-col lg="2">
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
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#FFBC00"
              @click="clearData()"
              style="font-size: 1.4rem;">
              <i class="las la-redo-alt"></i>
            </v-btn>
          </v-col>
          <v-col lg="1"></v-col>
          <v-col lg="2" v-if="totalPage > 1">
            <v-select
              v-model="page"
              :items="totalPageArr(totalPage)"
              :menu-props="{ top: true, offsetY: true }"
              label="Page Select"
            ></v-select>
          </v-col>
        </v-row>
        <v-data-table
          :loading="loading"
          :headers="headers"
          :items="blacklists"
          item-key="name"
          class="elevation-1"
          :search="search"
          :itemsPerPage="itemsPerPage"
          hide-default-footer
        >
          <template v-slot:item.no="{ index }">
            {{ index + 1 }}
          </template>
          <template v-slot:item.uid="{ item }">
            <div class="userid">
              {{ item.uid }}
            </div>
          </template>
          <template v-slot:item.username="{ item }">
            <nuxt-link :to="'/users/'+item.uuid" class="linkusername">
              {{ ectext(item.username) }}
            </nuxt-link>
          </template>
          <template v-slot:item.lastLogin="{ item }">
            <div class="dateout-box">
              <div class="time-box">
                <div class="icon">
                  <i class="las la-clock"></i>
                </div>
                <div class="textinner">
                  {{ timeget(item.lastLogin) }}
                </div>
              </div>
              <div class="date-box">
                <div class="icon">
                  <i class="las la-calendar-alt"></i>
                </div>
                <div class="textinner">
                  {{ dateget(item.lastLogin) }}
                </div>
              </div>
            </div>
          </template>
          <template v-slot:item.createdAt="{ item }">
            <div class="dateout-box">
              <div class="time-box">
                <div class="icon">
                  <i class="las la-clock"></i>
                </div>
                <div class="textinner">
                  {{ timeget(item.createdAt) }}
                </div>
              </div>
              <div class="date-box">
                <div class="icon">
                  <i class="las la-calendar-alt"></i>
                </div>
                <div class="textinner">
                  {{ dateget(item.createdAt) }}
                </div>
              </div>
            </div>
          </template>
          <template v-slot:item.function="{ item }">
            <v-btn
              small
              color="#FFBC00"
              @click="setUnban(item)"
              class="ma-2 white--text">
              Unban
              <v-icon right dark >
                mdi-undo
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-row align="center" style="margin-top: 20px;" v-if="totalPage > 1">
          <v-col lg="3">
            <v-select
              v-model="page"
              :items="totalPageArr(totalPage)"
              :menu-props="{ top: true, offsetY: true }"
              label="Page Select"
            ></v-select>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Breadbar from "~/components/Breadbar.vue";
export default {
  name: "homepage",
  components: [ Breadbar ],
  computed: {
    ...mapState(["accessToken"]),
  },
  watch: {
    page () {
      this.getUsers(this.page,'normal',200)
    }
  },
  data() {
    return {
      blacklists: [],
      searchTypeSelect: '',
      pageSize: 200,
      page: 1,
      itemsPerPage: 40,
      totalRecord: 0,
      totalPage: 0,
      loading: true,
      search: '',
      searchType: [
        { text: 'chatbee ID', value: 'username' },
        { text: 'displayName', value: 'displayName' },
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'UID', value: 'uid' },
        { text: 'Chatbee ID', value: 'username' },
        { text: 'Display Name', value: 'displayName' },
        { text: 'Created At', value: 'createdAt' },
        { text: 'remark', value: 'remark' },
        { text: 'Action', value: 'function' },
      ],
    }
  },
  mounted () {
    this.getUsers(1,'normal',200)
  },
  methods: {
    async setUnban (data) {
      const headers = { "x-rotor-auth": this.accessToken }
      let dataset = {
        id: data.id
      }
      await this.$axios.$post('/v1/users.unban', dataset, { headers }).then((response) => {
        console.log(response)
        this.getUsers(this.page,'normal',200)
      }).catch((error) => {
        console.log(error)
        this.getUsers(this.page,'normal',200)
      })
    },
    clearData () {
      this.getUsers(1,'normal',200)
    },
    totalPageArr (totalPage) {
      let data = []
      for (var i = 1; i <= totalPage; i++) {
        data.push(i)
      }
      return data
    },
    searchData () {
      if (this.search != '' && this.searchTypeSelect != '') {
        this.getUsers(1,'search',200)
      }
    },
    dateget (text) {
      if (text) {
        var newtext = text.split("T")
        var newtext = newtext[1].split(".")
        return newtext[0]
      } else {
        return '-'
      }
    },
    timeget (text) {
      if (text) {
        var newtext = text.split("T")
        newtext = newtext[0].replace("z", "")
        return newtext
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
        apiurl = '/v1/users-blacklists.all?page='+pageSelect+'&pageSize=200'
      } else {
        apiurl = '/v1/users-blacklists.all?page='+pageSelect+'&pageSize='+pageSize+'&'+this.searchTypeSelect+'='+this.search
      }
      this.$axios.$get(apiurl, {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.loading = false
        console.log(response)
        if (response.data && response.data != null) {
          this.blacklists = response.data
          if (status == 'normal') {
            this.totalRecord = response['_metadata'].totalRecords
            this.totalPage = response['_metadata'].totalPages
          } else {
            this.totalRecord = this.blacklists.length
            this.totalPage = Math.ceil(this.blacklists.length / 200)
          }
        } else {
          this.blacklists = []
          this.totalRecord = 0
          this.totalPage = 1
        }
      }).catch((error) => {
        this.loading = false
      })
    },
    undoItem (index) {
     this.$delete(this.finds, index)
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
</style>
