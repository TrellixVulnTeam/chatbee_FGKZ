<template>
  <div>
    <div style="padding-top: 20px; padding-bottom: 20px;">
      <v-btn depressed large dark color="#FFBC00">
        Add Wordlist
      </v-btn>
    </div>
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
            <div class="function-box t2">
              <i class="las la-trash"></i>
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
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
          {
            word: 'Rude Word',
            punishment: 'Kill',
            alignment: 'A-Z , ก-ฮ',
          },
        ],
        headers: [
          { text: 'No', value: 'no' },
          { text: 'Word', value: 'word' },
          { text: 'Condition', value: 'alignment' },
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
