<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Setting', link: '/setting' },
        { name: 'Member' },
      ]" />
      <div class="button-add-con">
        <v-btn
          depressed
          color="#FFBC00"
          @click="viewRoute('/setting/member/create')">
          Add Member
        </v-btn>
      </div>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="name"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:item.status="{ item }">
          <div class="status active" v-if="item.status">
            Active
          </div>
          <div class="status deactive" v-else>
            Deactive
          </div>
        </template>
        <template v-slot:item.image="{ item }">
          <div class="image-prev">
            <img :src="item.image" height="100%">
          </div>
        </template>
        <template v-slot:item.function="{ item }">
          <div class="function-con">
              <div class="function-box t2">
                <i class="las la-pen"></i>
              </div>
              <div class="function-box t2" v-if="false">
                <i class="las la-trash"></i>
              </div>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import Breadbar from "~/components/Breadbar.vue";
export default {
  name: "homepage",
  components: [ Breadbar ],
  data() {
    return {
      expand: false,
      users: [
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: false,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: false,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: false,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
        {
          id: '1001',
          name: 'firstname surname',
          phone: '0659168966',
          position: 'Some Position',
          status: true,
        },
      ],
      headers: [
        { text: 'เลขที่ผู้ใช้', align: 'start', value: 'id' },
        { text: 'ชื่อ - นามสกุล', value: 'name' },
        { text: 'ตำแหน่ง', value: 'position' },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Status', value: 'status' },
      ],
    }
  },
  methods: {
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
.image-prev {
  width: 100%;
  height: 90px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: left;
  img {
    max-height: 100%;
    max-width: 100%
  }
}

</style>
