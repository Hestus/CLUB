<template>
  <div @click.right="handler($event)" @click="closeHandler()" class="homepage">
    <img src="../../assets/images/wallpaper.jpg" alt="wallpaper" />

    <!-- Files and folder location -->
    <div class="homepage_overlay">
      <div class="homepage_folder_files_location">
        <ul>
          <li
            @click="closeHandler()"
            tabindex="1"
            v-for="(folder, index) in folders"
            :key="index"
            @click.right="handlerFolder($event)"
          >
            <img :src="folder.img" alt="..." />
            <span class="ff_viga span-white">{{ folder.folder_name }}</span>
          </li>
        </ul>
        <!-- Context Menu -->
        <ContextMenu
          @creatingNewFolder="CreatedNewFolder($event)"
          :style="{
            position: 'absolute',
            width: '200px',
            height: '200px',
            left: mouseX,
            top: mouseY,
          }"
          v-if="context_menu === true"
        />
        <!-- Context Menu Folder -->
        <ContextMenuFolder
          :style="{
            position: 'absolute',
            width: '200px',
            height: '250px',
            left: mouseX,
            top: mouseY,
          }"
          v-if="context_menu_folder === true"
        />
        <!-- Context Menu Taskbar -->
      </div>
    </div>
    <!-- Create New folder inside ContextMent of home page -->
    <NewFolder
      @closeNewFolderNow="closedNewFolder($event)"
      @closeNewFolderOnHandleSubmit="closedNewFolderEvent($event)"
      v-if="CreateNewFolder === true"
    />
  </div>
</template>

<script>
import ContextMenu from "../../components/ContextMenu/ContextMenu.vue";
import ContextMenuFolder from "../../components/ContextMenu/ContextMenuFolder.vue";
import NewFolder from "../../components/NewFolder/NewFolder.vue";

export default {
  components: { ContextMenu, NewFolder, ContextMenuFolder },
  data() {
    return {
      // Opening Context Menu
      context_menu: false,
      context_menu_folder: false,
      context_menu_taskbar: false,
      // mouse click location
      mouseX: 0,
      mouseY: 0,
      // Folders
      folders: [
        {
          id: 1,
          img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
          folder_name: "Desktop",
        },
        {
          id: 2,
          img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
          folder_name: "New Folder",
        },
      ],
      // Create new folder
      CreateNewFolder: false,
    };
  },
  methods: {
    // Right Click on homepage Handler
    handler(e) {
      if (this.context_menu_folder === false) {
        this.context_menu = true;
        this.mouseX = e.clientX + "px";
        this.mouseY = e.clientY - 60 + "px";
        console.log(this.mouseX, this.mouseY);
        e.preventDefault();
      }
    },
    // Right Click over folder handler
    handlerFolder(e) {
      this.context_menu = false;
      this.context_menu_folder = true;
      this.mouseX = e.clientX + "px";
      this.mouseY = e.clientY - 60 + "px";
      console.log(this.mouseX, this.mouseY);
      e.preventDefault();
    },
    closeHandler() {
      this.context_menu = false;
      this.context_menu_folder = false;
    },
    CreatedNewFolder(foldercreateValue) {
      this.CreateNewFolder = foldercreateValue;
      console.log(this.CreateNewFolder);
    },
    closedNewFolder(folderCloseValue) {
      this.CreateNewFolder = folderCloseValue;
      console.log(this.CreateNewFolder);
    },
    closedNewFolderEvent({ closingNewFolderBool, folder_new_name_now }) {
      console.log(closingNewFolderBool, folder_new_name_now);
      this.CreateNewFolder = closingNewFolderBool;
      this.folders.push({
        id: 3,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: folder_new_name_now,
      });
    },
  },
};
</script>

<style scoped>
@import "../CSS/HomePage.css";
</style>