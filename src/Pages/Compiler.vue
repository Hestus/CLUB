<template>
  <div class="compiler">
    <!-- HomePage Compiler -->
    <Taskbar />
    <HomePage />
  </div>
</template>

<script>
import Taskbar from "../components/Taskbar/Taskbar.vue";
import HomePage from "./HomePage/HomePage.vue";
export default {
  components: { HomePage, Taskbar },
};
</script>

<style scoped>
.compiler {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>