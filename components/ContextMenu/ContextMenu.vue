<template>
  <div class="contextMenu">
    <div tabindex="1" class="cm_first">
      <span @click="createNewFolder()" class="span-white ff_raleway">
        New Folder
      </span>
    </div>
    <hr class="cm_hr" />
    <div class="cm_second">
      <span class="span-white ff_raleway"> Paste</span>
      <span class="span-white ff_raleway">Undo</span>
    </div>
    <hr class="cm_hr" />
    <div class="cm_third">
      <span class="span-white ff_raleway">Change Background</span>
    </div>
    <hr class="cm_hr" />
    <div class="cm_fourth">
      <span class="span-white ff_raleway">Display Settings</span>
      <span class="span-white ff_raleway">Settings</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // creaeNewFolderNow: false,
    };
  },
  methods: {
    createNewFolder() {
      this.$emit("creatingNewFolder", true);
    },
  },
};
</script>

<style scoped>
@import "../CSS/ContextMenu/contextmenu.css";
</style>