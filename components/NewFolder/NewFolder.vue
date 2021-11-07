<template>
  <div class="newFolder">
    <div class="newFolder_div">
      <!-- Close new Folder Div -->
      <!-- New Folder Title on top -->
      <div class="new_folder_top_title">
        <span class="span-white ff_raleway">Folder Name</span>
        <!-- Closing New Folder Menu  -->
        <img
          @click="closeNewFolderDiv()"
          src="https://i.ibb.co/K2gtRpk/cross.png"
          alt=""
        />
      </div>
      <!-- input -->
      <div class="new_folder_input">
        <input
          type="text"
          placeholder="Write folder name here"
          v-model="folder_new_name"
          @keyup.enter="handleSubmit()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      folder_new_name: "",
    };
  },
  methods: {
    closeNewFolderDiv() {
      this.$emit("closeNewFolderNow", false);
    },
    handleSubmit() {
      console.log(this.folder_new_name);
      this.$emit("closeNewFolderOnHandleSubmit", {
        closingNewFolderBool: false,
        folder_new_name_now: this.folder_new_name,
      });
    },
  },
};
</script>

<style scoped>
@import "../CSS/newfolder.css";
</style>