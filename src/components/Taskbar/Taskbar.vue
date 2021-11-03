<template>
  <div class="taskbar flex">
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
  </div>
</template>

<script>
// Date Format
import dateFormat from "dateformat";
const now = new Date();

export default {
  components: {},
  data() {
    return {
      // DateFormat
      month: dateFormat(now, "ddd"),
      date: dateFormat(now, "d"),
      year: dateFormat(now, "yyyy"),
      time: dateFormat(now, "h:MM"),
      am_pm: dateFormat(now, "TT"),
    };
  },
};
</script>

<style scoped>
@import "../CSS/taskbar.css";
</style>