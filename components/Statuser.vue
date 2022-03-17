<template>
  <div>
    <div class="">
      Stat User Found: {{ totalRecord }}
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
    </v-row>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="users"
      item-key="name"
      class="elevation-1"
      :search="search"
      :itemsPerPage="itemsPerPage"
      hide-default-footer>
      <template v-slot:item.status="{ item }">
        <v-switch
          v-model="item.status"
          color="#B5D744"
          inset
          :label="status"
        ></v-switch>
      </template>
      <template v-slot:item.function="{ item }">
        <div class="function-con">
            <div class="function-box t2">
              <div class="icon">
                <i class="las la-eye"></i>
              </div>
              <div class="text">
                View Detail
              </div>
            </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import Breadbar from "~/components/Breadbar.vue";
  export default {
    components: [ Breadbar ],
    computed: {
      ...mapState(["accessToken"]),
    },
    data () {
      return {
        users: [],
        search: '',
        searchTypeSelect: 'uuid',
        pageSize: 200,
        page: 1,
        itemsPerPage: 40,
        totalRecord: 0,
        totalPage: 0,
        loading: true,
        searchType: [
          { text: 'uid', value: 'uid' },
        ],
        headers: [
          { text: 'No', align: 'start', value: 'no' },
          { text: 'Username', value: 'username' },
          { text: 'Type', value: 'type' },
          { text: 'Quota Used', value: 'quota' },
          { text: 'Max Quota', value: 'maxquota' },
          { text: 'function', value: 'function' },
        ],
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
          var newtext = newtext[1].split(".")
          return newtext[0]
        } else {
          return '-'
        }
      },
      timeget (text) {
        if (text) {
          var newtext = text.split("T")
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
          apiurl = '/v1/users-infractions-statistic'
        } else {
          apiurl = '/v1/users-infractions-statistic'+this.searchTypeSelect+'='+this.search
        }
        this.$axios.$get(apiurl, {
          headers: {"x-rotor-auth": this.accessToken}
        }).then((response) => {
          console.log(response.data)
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
      viewRoute(link) {
        this.$router.push({
          path: link
        });
      },
      redirectTo(path) {
        this.$router.replace({ path });
      }
    }
}
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
    padding-left: 5px;
    padding-right: 5px;
    .icon {
      display: inline-block;
      vertical-align: middle;
    }
    .text {
      display: inline-block;
      font-size: 0.6rem;
      vertical-align: middle;
    }
    &:hover {
      background-color: $primary;
      opacity: 0.5;
      color: #fff;
    }
  }
}
</style>
