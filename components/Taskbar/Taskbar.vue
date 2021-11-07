<template>
  <div
    @click.right="handler($event)"
    @click="closeHandler()"
    class="taskbar flex"
  >
    <!-- Logo -->
    <div class="taskbar_logo flex">
      <!-- Logo of the CLUB -->
      <img src="../../assets/icons/logo.png" alt="logo" />
    </div>
    <!-- Utilities -->
    <div class="utilities flex">
      <!-- File logo -->
      <div class="taskbar_utilities_file_logo margin_left">
        <img src="../../assets/icons/file_logo.png" alt="file_logo" />
      </div>
      <!-- Settings logo -->
      <div class="taskbar_utilities_file_logo margin_left">
        <img src="../../assets/icons/settings_logo.png" alt="settings_logo" />
      </div>
      <!-- Text Editor logo -->
      <div class="taskbar_utilities_file_logo margin_left">
        <img
          src="../../assets/icons/text-editor-logo.png"
          alt="settings_logo"
        />
      </div>
    </div>
    <!-- Notification, date and all -->
    <div class="notify flex">
      <!-- Notification Logo -->
      <div class="taskbar_notify_notification margin_left">
        <img src="../../assets/icons/notification.png" alt="notification" />
      </div>
      <!-- Sound Logo -->
      <div class="taskbar_notify_sound margin_left">
        <img src="../../assets/icons/sound.png" alt="notification" />
      </div>
      <!-- Date -->
      <div class="taskbar_notify_date margin_left">
        <span class="span-white ff_viga">
          {{ month }} {{ date }} {{ year }}
        </span>
      </div>
      <!-- Time -->
      <div class="taskbar_notify_Time margin_time_date">
        <span class="span-white ff_viga">{{ time }}{{ " " }}{{ am_pm }}</span>
      </div>
    </div>
    <!-- Context meny Taskbar -->
    <ContextMenuTaskbar
      :style="{
        position: 'absolute',
        width: '150px',
        height: '50px',
        left: mouseX,
        top: mouseY,
      }"
      v-if="context_menu_taskbar === true"
    />
  </div>
</template>

<script>
// Date Format
import dateFormat from "dateformat";
import ContextMenuTaskbar from "../ContextMenu/ContextMenuTaskbar.vue";

const now = new Date();

export default {
  components: { ContextMenuTaskbar },
  data() {
    return {
      // Context menu Taskbar
      context_menu_taskbar: false,
      // Mouse Movement
      // mouse click location
      mouseX: 0,
      mouseY: 0,
      // DateFormat
      month: dateFormat(now, "ddd"),
      date: dateFormat(now, "d"),
      year: dateFormat(now, "yyyy"),
      time: dateFormat(now, "h:MM"),
      am_pm: dateFormat(now, "TT"),
    };
  },
  methods: {
    handler(e) {
      this.context_menu_taskbar = true;
      this.mouseX = e.clientX + "px";
      this.mouseY = e.clientY + "px";
      console.log(this.mouseX, this.mouseY);
      e.preventDefault();
    },
    closeHandler() {
      this.context_menu_taskbar = false;
    },
  },
};
</script>

<style scoped>
@import "../CSS/taskbar.css";
</style>