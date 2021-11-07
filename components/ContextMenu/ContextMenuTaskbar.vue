<template>
  <div class="contextMenu_taskbar">
    <span class="span-white ff_raleway_regular">Taskbar Settings</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contextMenu_taskbar {
  background: rgba(65, 64, 64, 0.705);
  /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); */
  border: 1px solid rgba(255, 255, 255, 0.288);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contextMenu_taskbar > span {
  font-size: 15px;
}
</style>