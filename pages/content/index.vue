<template>
  <div class="page-wrapper">
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Content' },
      ]" />
      <div class="button-add-con">
        <v-btn
          depressed
          color="#FFBC00"
          @click="viewRoute('/content/create')">
          Create
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
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search..."
              class="mx-4"
            ></v-text-field>
          </template>
          <template v-slot:item.status="{ item }">
            <v-switch
              v-model="item.status"
              color="#B5D744"
              inset
              :label="status"
            ></v-switch>
          </template>
          <template v-slot:item.image="{ item }">
            <div class="image-prev" :style="'background: url('+item.image+'); background-size: cover; background-position: 50% 50%;'">
            </div>
          </template>
          <template v-slot:item.function="{ item }">
            <div class="function-con">
                <div class="function-box t2" @click="viewRoute('/content/testcontent')">
                  <i class="las la-pen"></i>
                </div>
                <div class="function-box t2">
                  <i class="las la-trash"></i>
                </div>
            </div>
          </template>
        </v-data-table>
      </div>
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
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: false,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: false,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
        {
          id: 'XXX0011',
          image: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          postname: 'Post Name Test',
          posttext: 'Post Text Test',
          like: Math.floor(Math.random() * 101),
          comment: Math.floor(Math.random() * 20),
          postdate: '15 Jan 2020, 13:12',
          status: true,
        },
      ],
      headers: [
        { text: 'ID', align: 'start', value: 'id' },
        { text: 'Picture Preview', value: 'image' },
        { text: 'Post Name', value: 'postname' },
        { text: 'Post Text', value: 'posttext' },
        { text: 'Likes', value: 'like' },
        { text: 'Comments', value: 'comment' },
        { text: 'Post Date', value: 'postdate' },
        { text: 'Public', value: 'status' },
        { text: 'function', value: 'function' },
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
  background-color: #eee;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
