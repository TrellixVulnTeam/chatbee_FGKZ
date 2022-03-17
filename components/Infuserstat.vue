<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText">
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search..."
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.no="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:item.function="{ item }">
        <v-btn depressed dark small color="orange">
          Cancel Ban
        </v-btn>
        <v-btn depressed dark small color="red">
          Delete
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
    data () {
      return {
        users: [
          {
            description: 'You cannot do something not allowed',
            punishment: 'Cannot Post on Timeline',
            quota: '1/3',
            enddate: '15 August 2022, 15:11',
          },
          {
            description: 'You cannot do something not allowed',
            punishment: 'Cannot Post on Timeline',
            quota: '2/3',
            enddate: '15 August 2022, 15:11',
          },
        ],
        headers: [
          { text: 'No', value: 'no' },
          { text: 'Punishment', value: 'punishment' },
          { text: 'Quota', value: 'quota' },
          { text: 'End in', value: 'enddate' },
          { text: 'Action', value: 'function' },
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
}
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
</style>
