<template>
  <div class="backgroundchange">
    <div class="bgc_div">
      <!-- Close new Folder Div -->
      <!-- New Folder Title on top -->
      <div class="bgc_top_title">
        <span class="span-white ff_raleway">Folder Name</span>
        <!-- Closing New Folder Menu  -->
        <img
          @click="closeImageUrlDiv()"
          src="https://i.ibb.co/K2gtRpk/cross.png"
          alt=""
        />
      </div>
      <!-- input -->
      <div class="bgc_input">
        <input
          type="url"
          placeholder="Paste Image URL here"
          v-model="bg_image_url"
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
      bg_image_url: "",
    };
  },
  methods: {
    closeImageUrlDiv() {
      this.$emit("closeNewImageUrl", false);
    },
    handleSubmit() {
      console.log(this.bg_image_url);
      this.$emit("closeNewURLOnHandleSubmit", {
        closingNewURLBool: false,
        image_new_url_now: this.bg_image_url,
      });
    },
  },
};
</script>

<style scoped>
@import "../CSS/backgroundchange.css";
</style>