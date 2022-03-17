<template>
  <footer>
    <div id="fb-root"></div>
    <v-container>
      <v-row>
        <v-col lg="6" md="6" cols="12">
          <img
            style="margin:10px"
            src="/hearing-heart-logo.png"
            alt="logo"
            height="45"
          />
          <p class="desc">
            Hearing Heart เป็นแพลตฟอร์มการสร้าง นักฟังเชิงลึกแห่งแรก
            ที่ใช้หลักสูตรที่ได้รับการรับรองจากกรมสุขภาพจิตแห่งประเทศไทย
          </p>
        </v-col>
        <v-col lg="2" md="6" cols="12">
          <div class="header">บริการของเรา</div>
          <div
            class="footer-link"
            v-for="(menu, index) in services"
            @click="viewRoute(menu.link)"
            v-bind:key="index"
          >
            {{ menu.name }}
          </div>
        </v-col>
        <v-col lg="2" md="6" cols="12">
          <div class="header">เกี่ยวกับเรา</div>
          <div
            class="footer-link"
            v-for="(menu, index) in aboutAs"
            @click="viewRoute(menu.link)"
            v-bind:key="index"
          >
            {{ menu.name }}
          </div>
        </v-col>
        <v-col lg="2" md="6" cols="12">
          <div class="header">Follow Us</div>
          <div
            class="footer-link"
            v-for="(menu, index) in followUs"
            @click="viewRoute(menu.link)"
            v-bind:key="index"
          >
            {{ menu.name }}
          </div>
        </v-col>
      </v-row>
      <div class="bottom-section">
        <div class="left">
          Copyright © 2022 Hearing Heart. All rights reserved.
        </div>
        <div class="bottom-item right">Terms & Conditions</div>
        <div class="bottom-item">Refund Policy</div>
        <div class="bottom-item">Privacy Policy</div>
      </div>
    </v-container>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      services: [
        { link: "/", name: "คอร์สเรียน" },
        { link: "/", name: "ระบายปัญหา" },
        { link: "/", name: "บทความ" },
        { link: "/", name: "สำหรับองค์กร" }
      ],
      aboutAs: [
        { link: "/", name: "เกี่ยวกับเรา" },
        { link: "/", name: "สื่อ" },
        { link: "/", name: "พาร์ทเนอร์" },
        { link: "/", name: "ติดต่อเรา" }
      ],
      followUs: [
        { link: "/", name: "Facebook", imgUrl: "~/static/facebook.png" },
        { link: "/", name: "Instagram", imgUrl: "~/static/instagram.png" }
      ]
    };
  },
  methods: {
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    }
  },
  watch: {},
  mounted() {},
  components: {}
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #fff;
  .header {
    color: $primary;
    font-size: 16px;
    font-weight: 700;
  }
  .footer-header {
    font-size: 1.4rem;
    color: #fff;
  }
  .footer-link {
    display: block;
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  .desc {
    margin: 10px;
    max-width: 400px;
    font-weight: 500;
  }
  .bottom-section {
    display: flex;
    margin: 20px 0;
    .left {
      color: #586074;
      margin-right: auto;
    }
    .bottom-item {
      font-weight: 500;
      margin: 0 20px;
    }
    .right {
      margin-left: auto;
    }
  }
}
</style>
