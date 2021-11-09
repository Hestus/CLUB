<template>
  <div
    @click.right="handleHomePageContextMenu($event)"
    @click="handleContextMenuClosing()"
    class="homepage"
  >
    <img src="../../assets/images/wallpaper.jpg" alt="wallpaper" />

    <!-- Files and folder location -->
    <div class="homepage_overlay">
      <div class="homepage_folder_files_location">
        <ul>
          <li
            @click="handleContextMenuClosing()"
            tabindex="1"
            v-for="(folder, index) in folders"
            :key="index"
            @click.right="handleFolderContextMenu($event)"
          >
            <img :src="folder.img" alt="..." />
            <span class="ff_viga span-white">{{ folder.folder_name }}</span>
          </li>
        </ul>
        <!-- Context Menu -->
        <ContextMenu
          @creatingNewFolder="createdNewFolder($event)"
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
      v-if="createNewFolder === true"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import ContextMenu from "../../components/ContextMenu/ContextMenu.vue";
import ContextMenuFolder from "../../components/ContextMenu/ContextMenuFolder.vue";
import NewFolder from "../../components/NewFolder/NewFolder.vue";

export default {
  components: { ContextMenu, NewFolder, ContextMenuFolder },

  setup() {
    // Opening Context Menu
    const context_menu = ref(false);
    const context_menu_folder = ref(false);
    const context_menu_taskbar = ref(false);
    //     // mouse click location
    const mouseX = ref("0");
    const mouseY = ref("0");
    // Folders
    const folders = ref([
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
    ]);

    // Create new folder
    const createNewFolder = ref(false);

    // Right Click on homepage Handler
    function handleHomePageContextMenu(e) {
      if (context_menu_folder.value === false) {
        context_menu.value = true;
        mouseX.value = e.clientX + "px";
        mouseY.value = e.clientY - 60 + "px";
        console.log(mouseX.value, mouseY.value);
        e.preventDefault();
      }
    }

    // Right Click over folder handler
    function handleFolderContextMenu(e) {
      context_menu.value = false;
      context_menu_folder.value = true;
      mouseX.value = e.clientX + "px";
      mouseY.value = e.clientY - 60 + "px";
      console.log(mouseX.value, mouseY.value);
      e.preventDefault();
    }

    // Closing Handler
    function handleContextMenuClosing() {
      context_menu.value = false;
      context_menu_folder.value = false;
    }

    // Create new folder
    function createdNewFolder(foldercreateValue) {
      createNewFolder.value = foldercreateValue;
      console.log(this.createNewFolder);
    }

    // closing new folder
    function closedNewFolder(folderCloseValue) {
      createNewFolder.value = folderCloseValue;
      console.log(createNewFolder.value);
    }

    // Closing new folder event
    function closedNewFolderEvent({ closingNewFolderBool, currentFolderName }) {
      console.log(closingNewFolderBool, currentFolderName);
      createNewFolder.value = closingNewFolderBool;
      folders.value.push({
        id: 3,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: currentFolderName,
      });
    }

    return {
      context_menu,
      context_menu_folder,
      context_menu_taskbar,
      mouseX,
      mouseY,
      folders,
      createNewFolder,
      handleHomePageContextMenu,
      handleFolderContextMenu,
      handleContextMenuClosing,
      createdNewFolder,
      closedNewFolder,
      closedNewFolderEvent,
    };
  },
};
</script>

<style scoped>
@import "../CSS/HomePage.css";
</style>