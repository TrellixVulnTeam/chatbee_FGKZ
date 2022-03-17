<template>
  <div class="course-item"
    :class="{ 'notAllow': course.lockcourse == true }"
    @click="viewRouteCourse(course.id)">
    <div class="filterLock t2 middle-item" v-if="course.lockcourse == true">
      <div class="frontSell t2 middle-item">
        <div class="buy-button t2">
            ซื้อคอร์ส
        </div>
      </div>
      <img src="/lock.png" class="t2">
    </div>
    <div :to="'/deep-listener/learning/'+course.id">
      <div class="backgroundcourse" v-if="course.imageUrl" :style="{
          'background': 'url('+course.imageUrl+')',
          'background-size': 'cover',
          'background-position': '50% 50%'
        }"></div>
      <div v-else
        class="backgroundcourse"
        style="background: url('/anonyback.jpg'); background-size: cover; background-position: 50% 50%;"></div>
      <div class="course-detail">
        <div class="name">{{ course.name }}</div>
        <div class="course-desc">
          <div class="desc-item">
            <img src="/icon/clock.png" alt="clock" />
            <span class="text-desc"> {{ course.durationMin }} นาที </span>
          </div>
          <div class="desc-item">
            <img src="/icon/paper.png" alt="clock" />
            <span class="text-desc"> {{ course.noOfTest }} บททดสอบ </span>
          </div>
          <div class="desc-item">
            <img src="/icon/book.png" alt="clock" />
            <span class="text-desc">
              {{ course.noOfLearning }} บทเรียน
            </span>
          </div>
          <div class="desc-item">
            <img src="/icon/person.png" alt="clock" />
            <span class="text-desc">{{ course.level || "สำหรับผู้เริ่มต้น" }}</span>
          </div>
        </div>

        <div class="progress-bar-desc" v-if="false">
          <div>ความคืบหน้า</div>
          <div>{{ course.progress * 100 }}%</div>
        </div>
        <div class="progress-bar" v-if="false">
          <span
            class="progress-bar-fill"
            :style="`width: ${course.progress * 100}%`"
          ></span>
        </div>
        <button width="100%" class="gradmain t2">
          เรียน
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, { name: '$_', lodash })
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["business"]),
    ...mapState("auth", ["user"])
  },
  watch: {
  },
  props: ['course'],
  methods: {
    viewRouteCourse(id) {
      if (this.course.lockcourse == true) {
        window.location.href='https://backend.moommongrnd.com/payment?courseId='+id+'&userId='+this.user.uid
      } else {
        this.$router.push({
          path: '/mycourse/learn',
          query: {
            id: id,
            pointer: ''
          }
        })
      }
    },
  }
};
</script>
<style lang="scss" scoped>
  .course-item {
    margin-top: 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 44px rgba(220, 170, 170, 0.2);
    overflow: hidden;
    position: relative;
    &.notAllow {
      opacity: 0.9;
      filter: grayscale(20%);
      -ms-filter: grayscale(20%);
      //cursor: no-drop;
    }
    .filterLock {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      background-color: rgba(0,0,0,0.4);
      .frontSell {
        position: absolute;
        z-index: 1000;
        left: 0px;
        width: 100%;
        height: 100%;
        top: 0px;
        opacity: 0;
        .buy-button {
            display: inline-block;
            height: 45px;
            line-height: 45px;
            padding-left: 30px;
            padding-right: 30px;
            background-color: #fff;
            color: #000;
            border-radius: 100px;
            font-size: 1rem;
            cursor: pointer;
        }
      }
      &:hover {
        background-color: rgba(0,0,0,0.7);
        .frontSell {
          opacity: 1;
        }
        img {
          margin-top: -15px;
          opacity: 0;
        }
      }
      &:active {
        img {
          margin-top: -15px;
          width: 90px;
        }
      }
      img {
        width: 80px;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .backgroundcourse {
      width: 100%;
      height: 200px;
    }
    button {
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-radius: 100px;
      color: #fff;
      margin-top: 20px;
      font-size: 1.2rem;
      font-weight: 400;
      &:hover {
        opacity: 0.6;
      }
    }
    .course-detail {
      padding: 20px;
      width: 100%;
      .name {
        font-size: 24px;
        font-weight: 700;
      }
      .course-desc {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        .desc-item {
          height: 40px;
          width: 49%;
          font-weight: 500;
          font-size: 18px;
        }
        .text-desc {
          padding: 5px;
          padding-bottom: 20px;
        }
      }
    }
  }
  .card-style {
    margin: 20px;
  }

  .progress-bar {
    width: 100%;
    background-color: #ffe6d5;
    border-radius: 50px;
  }

  .progress-bar-fill {
    display: block;
    height: 22px;
    background-color: #ffc096;
    border-radius: 3px;
    border-radius: 50px;
    transition: width 500ms ease-in-out;
  }
  .progress-bar-desc {
    display: flex;
    justify-content: space-between;
    color: #818896;
    font-size: 18px;
    font-weight: 400;
  }

</style>
