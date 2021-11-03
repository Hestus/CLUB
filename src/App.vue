<template>
  <Compiler />
</template>

<script>
import Compiler from "./Pages/Compiler.vue";

export default {
  name: "App",
  components: {
    Compiler,
  },
};
</script>

<style>
@import "./base.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
