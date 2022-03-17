<template>
  <div class="prob-box t2">
    <div class="edit-box t2 gradmain" v-if="owner" @click="viewRoute('/problem/edit/'+data.id)">
      <i class="las la-pen"></i>
      แก้ไข
    </div>
    <Nuxt-link class="prob-inner" :to="'/problem/'+this.getProbcatCode.slug+'/'+ this.data.slug" v-if="problemcats">
      <div class="usersection" v-if="userdata && data.anonymous != true">
        <div class="userback" :style="backimage">
          <div class="userimage" :style="userimage"></div>
          <div class="username">
             {{ userdata.firstName }} {{ userdata.lastName }}
          </div>
          <div class="filter"></div>
          <div class="back gradmain"></div>
        </div>
      </div>
      <div class="usersection" v-if="data.anonymous == true || !userdata">
        <div class="userback" style="background: url('/anonyback.jpg'); background-size: cover; background-position: 50% 50%;">
          <div class="userimage" style="background: url('/anony.jpg'); background-size: cover; background-position: 50% 50%;"></div>
          <div class="username">
             ผู้ใช้งานไม่เปิดสาธารณะ
          </div>
          <div class="filter"></div>
          <div class="back gradmain"></div>
        </div>
      </div>
      <div class="innerprobdata">
        <div class="title ec-text">
          {{ data.title }}
        </div>
        <div class="probcat">
          {{ getProbcatCode.name }}
        </div>
        <div class="detail ec-text">
          {{ data.content }}
        </div>
        <div class="funct-box">
          <div class="icon-box">
            <div class="icon">
              <i class="las la-comments"></i>
            </div>
            <div class="value">
              0
            </div>
          </div>
        </div>
      </div>
    </Nuxt-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["problemcats"]),
    ...mapState('auth', ["uid"]),
    getProbcatCode () {
      if (this.problemcats) {
        return this._.find(this.problemcats, (probcat) => {
          return probcat.code == this.data.probcat
        });
      }
    },
    owner () {
      if (this.uid == this.data.user_id) {
        return true
      } else {
        return false
      }
    },
    thispage: function() {
      return this.$route.name;
    }
  },
  data() {
    return {
      userdata: [],
      backimage: {
        backgroundImage: 'url(/login-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      },
      userimage: {
        backgroundImage: 'url(/login-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }
    }
  },
  props: ["data", "probid"],
  mounted () {
    this.getUserdata()
  },
  methods: {
    async getUserdata () {
      const userdata = this.$fire.firestore.collection('USER').doc(this.data.user_id)
      const doc = await userdata.get();
      const datauser = doc.data()
      this.userdata = doc.data()
      this.userimage = {
        backgroundImage: 'url('+this.userdata.userimage+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }
      this.backimage = {
        backgroundImage: 'url('+this.userdata.bannerimage+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }
    },
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    }
  },
  components: {}
};
</script>

<style lang="scss">
  .prob-box {
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    display: block;
    border-bottom: 2px $primary solid;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    box-shadow: 0px 12px 30px -10px rgba(51, 37, 37, 0.3);
    -ms-box-shadow: 0px 12px 30px -10px rgba(51, 37, 37, 0.3);
    overflow: hidden;
    .prob-inner {
      width: 100%;
      position: relative;
    }
    .innerprobdata {
      width: 100%;
      padding: 20px;
      padding-top: 0px;
    }
    .usersection {
      .userback {
        width: 100%;
        height: 200px;
        text-align: center;
        position: relative;
        overflow: hidden;
        .back {
          position: absolute;
          width: 100%;
          left: 0px;
          top: 0px;
          height: 100%;
          opacity: 0.3;
        }
        .filter {
          filter: blur(15px);
          -ms-filter: blur(15px);
          width: 150%;
          height: 200px;
          background-color: #fff;
          position: absolute;
          left: 0px;
          margin-left: -25%;
          bottom: 0px;
          margin-bottom: -150px;
          z-index: 100;
        }
        .userimage {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          display: inline-block;
          position: relative;
          z-index: 1000;
          margin-top: 20px;
        }
        .username {
          color: #fff;
          font-weight: 500;
          position: relative;
          font-size: 1.1rem;
          z-index: 1000;
        }
      }
    }
    a {
      text-decoration: none;
    }
    &:hover {
      opacity: 0.8;
    }
    .title {
      font-size: 1.6rem;
      font-weight: 500;
      color: #000;
      font-family: "Mitr";
    }
    .probcat {
      font-size: 0.9rem;
      color: $primary;
      font-weight: 500;
    }
    .detail {
      font-size: 1rem;
      font-weight: 300;
      color: #000;
    }
    .edit-box {
      position: absolute;
      left: 20px;
      bottom: 15px;
      padding-left: 10px;
      padding-right: 10px;
      color: #fff;
      cursor: pointer;
      z-index: 1000;
      height: 30px;
      border-radius: 100px;
      line-height: 30px;
      text-align: center;
    }
    .funct-box {
      width: 100%;
      text-align: right;
      padding-top: 10px;
      position: relative;
      .icon-box {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 100px;
        border: 1px $primary solid;
        .icon {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          margin-right: 5px;
        }
        .value {
          display: inline-block;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
</style>
