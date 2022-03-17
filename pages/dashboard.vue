<template>
  <div class="page-wrapper">
    <div class="page-section">
      Hello Chatbee!
    </div>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return {
      expand: false,
      totalUserPage: 0
    };
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
</style>
