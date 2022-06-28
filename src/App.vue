<style>
 @import '../public/frontend/assets/css/swiper-bundle.min.css';
 @import '../public/frontend/assets/css/styles.css';
</style>

<template>
  <master></master>
</template>

<script>

import Master from "./views/MasterView.vue"

export default {
  mounted() {
    let Script = document.createElement("script");
    Script.setAttribute("src", "./frontend/assets/js/main.js");
    document.head.appendChild(Script);
  },
  components: {Master}
};

</script>