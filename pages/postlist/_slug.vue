<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Postlist', link: '/postlist' },
        { name: pageslug },
      ]" />
      <div class="headtitle">
        Edit Post
      </div>
      <v-row>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box" v-if="checkArr(post.imageUrls) == true">
            <img :src="selectimage" width="100%">
            <div class="image-list-con">
              <v-row>
                <v-col lg="3" md="3" sm="3" xs="3" cols="3" v-for="image in post.imageUrls">
                  <div class="image-list-box" @click="selectPostImage(image)">
                    <div class="delete" v-if="false">
                      <i class="las la-times"></i>
                    </div>
                    <div class="front middle-item">
                      <img :src="image">
                    </div>
                    <img src="/rect.png" width="100%">
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <img src="/noimage.png" width="100%" v-if="checkArr(post.imageUrls) == false">
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Post Text</div>
            <div class="contentdata-value">
              <input type="text" v-model="post.caption">
            </div>
          </div>
          <div class="contentdata-box">
            <div class="contentdata-label">Post Date</div>
            <div class="contentdata-value">
              <div class="icon-right" @click="selectdate = true">
                <i class="las la-calendar-alt"></i>
              </div>
              <input type="text" placeholder="Start Date" v-model="post.createdAt">
            </div>
          </div>
          <v-row>
            <v-col lg="6" md="6" cols="6" sm="6" xs="6">
              <div class="contentdata-box">
                <div class="contentdata-label">Post Likes</div>
                <div class="contentdata-value">
                  <input type="text" v-model="post.likeAmount">
                </div>
              </div>
            </v-col>
            <v-col lg="6" md="6" cols="6" sm="6" xs="6">
              <div class="contentdata-box">
                <div class="contentdata-label">Post Comments</div>
                <div class="contentdata-value">
                  <input type="text" v-model="post.commentAmount">
                </div>
              </div>
            </v-col>
            <v-col lg="6" md="6" cols="6" sm="6" xs="6">
              <div class="contentdata-box">
                <div class="contentdata-label">Posted By</div>
                <nuxt-link :to="'/users/'+post.uuid" class="contentdata-value">
                  {{ post.displayName }}
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
          <div class="contentdata-box" style="margin-top: 20px;">
            <!-- <v-btn depressed large dark color="#FFBC00">
              Public
            </v-btn> -->
            <div @click="setPublish(post, post.hidden)" style="cursor: pointer">
              <v-switch
                v-model="post.isPublished"
                :loading="loading"
                style="cursor: pointer"
                disabled
                label="Publish"
              ></v-switch>
            </div>
            <!-- <v-btn depressed large dark
              color="red"
              v-if="status == 1"
              @click="status = 2">
              Ban User
            </v-btn>
            <v-btn depressed large dark
              color="#000"
              v-if="status == 2"
              @click="status = 1">
              Unban User
            </v-btn> -->
          </div>
        </v-col>
      </v-row>
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
  data() {
    return {
      loading: false,
      status: 1,
      post: [],
      selectimage: '',
      genders: [
        { text: 'Man' },
        { text: 'Woman' },
        { text: 'Gay' },
        { text: 'Resbian' },
        { text: 'ETC' },
      ],
      pageslug: this.$route.params.slug,
    }
  },
  mounted () {
    this.getPostSlug()
  },
  methods: {
    async setPublish (data, status) {
      this.loading = true
      const dataset = {
        isPublished: !data.isPublished,
        postId: data.id
      }
      const headers = { "x-rotor-auth": this.accessToken }
      await this.$axios.$post('/v1/posts.change-published', dataset, { headers }).then((response) => {
        console.log(response)
        this.getPostSlug()
      }).catch((error) => {})
      this.loading = false
    },
    checkArr (arr) {
      if (Array.isArray(arr)) {
        if (arr.length > 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    selectPostImage (image) {
      this.selectimage = image
    },
    getPostSlug() {
      this.loading = true
      this.$axios.$get('/v1/posts.one?id='+this.$route.params.slug, {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        console.log(response)
        this.post = []
        this.post = response.data
        if (this.post.imageUrls) {
          this.selectimage = this.post.imageUrls[0]
        }
        this.loading = false
      }).catch((error) => {
        console.log(error)
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

.linkusername {
  cursor: pointer;
  color: $primary;
}
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
  height: 25px;
  line-height: 25px;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  &.active {
    background-color: $correct;
  }
  &.deactive {
    background-color: $error;
  }
}

.change-password-con {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 50000;
  .modla-inner {
    padding: 30px;
    background-color: #fff;
    width: 600px;
  }
}

.image-list-box {
  width: 100%;
  position: relative;
  background-color: #eee;
  margin-top: 15px;
  cursor: pointer;
  .delete {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 25px;
    width: 25px;
    background-color: #000;
    z-index: 1000;
    border-radius: 100px;
    margin-top: -10px;
    margin-right: -10px;
    color: #fff;
    font-size: 1.1rem;
    line-height: 27px;
    text-align: center;
  }
  .front {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
}

.contentdata-box {
  margin-bottom: 20px;
}
</style>
