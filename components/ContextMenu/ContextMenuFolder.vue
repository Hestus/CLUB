<template>
  <div class="contextMenu_folder">
    <span class="span-white ff_raleway_regular">Open</span>
    <span class="span-white ff_raleway_regular">Pin to Taskbar</span>
    <span class="span-white ff_raleway_regular">Copy Path</span>
    <span class="span-white ff_raleway_regular">Cut</span>
    <span class="span-white ff_raleway_regular">Copy</span>
    <span class="span-white ff_raleway_regular">Create ShortCut</span>
    <span class="span-white ff_raleway_regular">Delete</span>
    <span @click="changingFolderName()" class="span-white ff_raleway_regular"
      >Rename</span
    >
    <span class="span-white ff_raleway_regular">Properties</span>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  // emits: ["changedFolderName"],
  setup(_, { emit }) {

    // Changing Folder Name
    function changingFolderName() {
      emit("changedFolderName", true);
    }

    return { changingFolderName };
  },
};
</script>

<style scoped>
@import "../CSS/ContextMenu/contextmenufolder.css";
</style>