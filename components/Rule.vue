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
        <div class="function-con">
          <div class="function-box t2">
            <i class="las la-pen"></i>
          </div>
        </div>
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
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
          {
            description: 'You cannot do something not allowed',
            bantype: 'Cannot Post on Timeline',
            quota: 3,
            punishment: '30 Days',
          },
        ],
        headers: [
          { text: 'No', value: 'no' },
          { text: 'Short Description', value: 'description' },
          { text: 'Ban Type', value: 'bantype' },
          { text: 'Quota', value: 'quota' },
          { text: 'Punishment', value: 'punishment' },
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
