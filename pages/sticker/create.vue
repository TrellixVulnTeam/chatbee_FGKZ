<template>
  <div class="page-wrapper">
    <div class="page-section content-con">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Sticker', link: '/sticker' },
        { name: 'Create Sticker' },
      ]" />
      <div class="headtitle">
        Add Sticker
      </div>
      <v-row>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="contentdata-label">Title</div>
            <div class="contentdata-value">
              <input type="text" placeholder="Title of Content">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Cover Image</div>
            <div class="contentdata-value">
              <v-file-input
                accept="image/*"
                label="image"
              ></v-file-input>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6"></v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Sticker</div>
            <v-btn
              depressed
              color="#FFBC00"
              @click="addSticker()">
              Add Sticker
            </v-btn>
            <div v-for="stiker in stikers">
              <div class="contentdata-value">
                <v-file-input
                  accept="image/*"
                  label="image"
                ></v-file-input>
              </div>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6"></v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <v-switch
            v-model="displayCover"
            color="#B5D744"
            inset
            label="Show Cover Image"
          ></v-switch>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <v-switch
            v-model="status"
            color="#B5D744"
            inset
            label="Display Stickers"
          ></v-switch>
        </v-col>
      </v-row>
      <div class="line-divider"></div>
      <v-row style="margin-top: 20px;">
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="button-con">
              <v-btn depressed large color="#eee" @click="viewRoute('/sticker')">
                Cancel
              </v-btn>
              <v-btn depressed large dark color="#FFBC00" @click="viewRoute('/sticker')">
                Submit
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import Richtext from "~/components/Richtext.vue";
import Breadbar from "~/components/Breadbar.vue";
export default {
  name: "homepage",
  components: [ Breadbar ],
  data() {
    return {
      stikers: [],
      status: true,
      displayCover: false,
      types: [
        { text: 'Type1' },
        { text: 'Type2' },
      ],
      pageslug: this.$route.params.slug,
    }
  },
  methods: {
    addSticker () {
      this.stickers.push({test: 11})
    },
    viewRoute(link) {
      this.$router.push({
        path: link
      });
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
</style>
