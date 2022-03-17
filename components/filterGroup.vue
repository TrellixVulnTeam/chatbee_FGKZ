<template>
  <div class="filler-group-btgroup">
    <div
      class="filler-btgroup"
      v-on:click="
        $emit('onFilter', null);
        setButtonStep('0');
      "
      :class="{ active: buttonstep == 0 }"
    >
      All User ({{ steps[0] }})
    </div>
    <div
      class="filler-btgroup"
      @click="
        $emit('onFilter', 'Learning');
        setButtonStep('1');
      "
      :class="{ active: buttonstep == 1 }"
    >
      Learning ({{ steps[1] }})
    </div>
    <div
      class="filler-btgroup"
      @click="
        $emit('onFilter', 'Waiting for feedback');
        setButtonStep('2');
      "
      :class="{ active: buttonstep == 2 }"
    >
      Waiting for feedback ({{ steps[2] }})
    </div>

    <div
      class="filler-btgroup"
      @click="
        $emit('onFilter', 'Assign');
        setButtonStep('3');
      "
      :class="{ active: buttonstep == 3 }"
    >
      Do Noting ({{ steps[3] }})
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterGroup",
  data() {
    return {
      buttonstep: 0
    };
  },
  props: {
    steps: Array
  },
  methods: {
    setButtonStep(data) {
      this.buttonstep = data;
    }
  }
};
</script>
<style lang="scss" scoped>
.filler-group-btgroup {
  padding: 20px 0;
  .filler-btgroup {
    display: inline-block;
    border: 1px rgba(0, 0, 0, 0.8) solid;
    background-color: transparent;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 100px;
    height: 45px;
    line-height: 45px;
    margin-bottom: 15px;
    color: #000;
    cursor: pointer;
    &.active {
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }
}
</style>
