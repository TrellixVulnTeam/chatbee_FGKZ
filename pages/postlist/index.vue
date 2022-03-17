<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Post List' },
      ]" />
      <div>
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
          <v-col cols="3">
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
          <v-col cols="2" v-if="totalPage > 1">
            <v-select
              v-model="page"
              :items="totalPageArr(totalPage)"
              :menu-props="{ top: true, offsetY: true }"
              label="Page Select"
            ></v-select>
          </v-col>
        </v-row>
        <div class="" style="padding-bottom: 20px;">
          Posts Result: {{ totalRecord }}
          <span v-if="totalRecord == 1">post</span>
          <span v-if="totalRecord > 1">posts</span>
        </div>
        <v-data-table
          :loading="loading"
          :headers="headers"
          :items="posts"
          item-key="name"
          class="elevation-1"
          :itemsPerPage="itemsPerPage"
          hide-default-footer>
          <template v-slot:item.id="{ item }">
            <div class="id-con">
              <div class="idtext">
                <!-- {{ item.id }} -->
                <div class="banbutton-con"
                  v-if="item.isPublished == true"
                  @click="setPublish(item, false)">
                  <div class="button">
                    <div class="icon">
                      <i class="las la-user-slash"></i>
                    </div>
                    Ban this Post
                  </div>
                </div>
                <div class="banbutton-con"
                  v-if="item.isPublished == false"
                  @click="setPublish(item, true)">
                  <div class="button unban">
                    <div class="icon">
                      <i class="las la-undo"></i>
                    </div>
                    Unban
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:item.profileImage="{ item }">
            <div class="image-prev-outer" :class="{ 'noimage': item.imageUrls.length == 0 }">
              <div class="counter" v-if="item.imageUrls.length > 0">
                <div class="icon">
                  <i class="las la-image"></i>
                </div>
                <div class="text">{{ item.imageUrls.length }}</div>
              </div>
              <div class="image-prev-noblur t2 middle-item" v-if="item.imageUrls.length > 0">
                <img :src="item.imageUrls[0]" class="front">
              </div>
              <img src="rect.png" class="rect" v-if="item.imageUrls.length > 0">
              <img src="/noimage.png" v-else width="100%" style="height: auto !important;">
            </div>
          </template>
          <template v-slot:item.createdAt="{ item }">
            <div class="dateout-box">
              <div class="date-box">
                <div class="icon">
                  <i class="las la-clock"></i>
                </div>
                <div class="textinner">
                  {{ dateget(item.createdAt) }}
                </div>
              </div>
              <div class="time-box">
                <div class="icon">
                  <i class="las la-calendar-alt"></i>
                </div>
                <div class="textinner">
                  {{ timeget(item.createdAt) }}
                </div>
              </div>
            </div>
          </template>
          <template v-slot:item.hidden="{ item }">
            <v-switch
              style="cursor: pointer !important"
              @click="setPublish(item)"
              v-model="item.isPublished"
              :loading="item.loading == true"></v-switch>
            <!-- <div class="status active" v-if="item.hidden">
              Published
            </div>
            <div class="status deactive" v-else>
              Hidden
            </div> -->
          </template>
          <template v-slot:item.postname="{ item }">
            <nuxt-link :to="'/posts/'+item.id" class="linkpostname">
              {{ item.postname }}
            </nuxt-link>
          </template>
          <template v-slot:item.function="{ item }">
            <div class="function-con">
                <div class="function-box t2" @click="viewRoute('/postlist/'+item.id)">
                  <i class="las la-pen"></i>
                </div>
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
  name: "homepage",
  components: [ Breadbar ],
  computed: {
    ...mapState(["accessToken"]),
  },
  watch: {
    page () {
      this.getPosts(this.page,'normal',200)
    }
  },
  data() {
    return {
      selectdate: false,
      searchTypeSelect: '',
      pageSize: 200,
      page: 1,
      itemsPerPage: 30,
      totalRecord: 0,
      totalPage: 0,
      loading: true,
      search: '',
      searchType: [
        // { text: 'uid', value: 'uid' },
        { text: 'Posted Name', value: 'displayName' },
      ],
      dates: '',
      posts: [],
      headers: [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Picture Preview', value: 'profileImage' },
        { text: 'Posted Name', value: 'displayName' },
        { text: 'Post Text', value: 'caption' },
        { text: 'Likes', value: 'likeAmount' },
        { text: 'Comments', value: 'commentAmount' },
        { text: 'Post Date', value: 'createdAt' },
        { text: 'Action', value: 'function' },
      ],
    }
  },
  mounted () {
    this.getPosts(1,'normal',200)
  },
  methods: {
    clearData () {
      this.getPosts(1,'normal',200)
    },
    async setPublish (data, status) {
      data.loading = true
      const dataset = {
        isPublished: status,
        postId: data.id
      }
      const headers = { "x-rotor-auth": this.accessToken }
      await this.$axios.$post('/v1/posts.change-published', dataset, { headers }).then((response) => {
        this.getPosts(this.page,'search',200)
      }).catch((error) => {})
      data.loading = false
    },
    searchData () {
      if (this.search != '' && this.searchTypeSelect != '') {
        this.getPosts(1,'search',200)
      } else {
        this.getPosts(1,'normal',200)
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
    getPosts(pageSelect,status,pageSize) {
      this.loading = true
      let apiurl
      if (status == 'normal') {
        apiurl = '/v1/posts.all?page='+pageSelect+'&pageSize=200'
      } else {
        apiurl = '/v1/posts.all?page='+pageSelect+'&pageSize='+pageSize+'&'+this.searchTypeSelect+'='+this.search
      }
      this.$axios.$get(apiurl, {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.loading = false
        console.log(response)
        if (response.data && response.data != null) {
          this.posts = []
          this.posts = response.data
          if (status == 'normal') {
            this.totalRecord = response['_metadata'].totalRecords
            this.totalPage = response['_metadata'].totalPages
          } else {
            this.totalRecord = this.posts.length
            this.totalPage = Math.ceil(this.posts.length / 200)
          }
        } else {
          this.posts = []
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

.id-con {
  .banbutton-con {
    margin-top: 10px;
    .button {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      padding-right: 15px;
      display: inline-block;
      background-color: #E35645;
      cursor: pointer;
      border-radius: 10px;
      color: #fff;
      overflow: hidden;
      position: relative;
      padding-left: 50px;
      &.unban {
        background-color: #E38D45
      }
      .icon {
        height: 40px;
        line-height: 40px;
        background-color: rgba(255,255,255,0.2);
        position: absolute;
        left: 0px;
        width: 40px;
        font-size: 1.6rem;
        text-align: center;
      }
    }
  }
  .idtext {
    font-size: 0.8rem;
  }
}

</style>
