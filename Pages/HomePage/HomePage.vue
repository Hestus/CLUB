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
    const CreateNewFolder = ref(false);

    // Right Click on homepage Handler
    const handler = (e) => {
      if (context_menu_folder.value === false) {
        context_menu.value = true;
        mouseX.value = e.clientX + "px";
        mouseY.value = e.clientY - 60 + "px";
        console.log(mouseX.value, mouseY.value);
        e.preventDefault();
      }
    };

    // Right Click over folder handler
    const handlerFolder = (e) => {
      context_menu.value = false;
      context_menu_folder.value = true;
      mouseX.value = e.clientX + "px";
      mouseY.value = e.clientY - 60 + "px";
      console.log(mouseX.value, mouseY.value);
      e.preventDefault();
    };

    // Closing Handler
    const closeHandler = () => {
      context_menu.value = false;
      context_menu_folder.value = false;
    };

    // Create new folder
    const CreatedNewFolder = (foldercreateValue) => {
      CreateNewFolder.value = foldercreateValue;
      console.log(this.CreateNewFolder);
    };

    // closing new folder
    const closedNewFolder = (folderCloseValue) => {
      CreateNewFolder.value = folderCloseValue;
      console.log(CreateNewFolder.value);
    };

    // Closing new folder event
    const closedNewFolderEvent = ({
      closingNewFolderBool,
      folder_new_name_now,
    }) => {
      console.log(closingNewFolderBool, folder_new_name_now);
      CreateNewFolder.value = closingNewFolderBool;
      folders.value.push({
        id: 3,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: folder_new_name_now,
      });
    };

    return {
      context_menu,
      context_menu_folder,
      context_menu_taskbar,
      mouseX,
      mouseY,
      folders,
      CreateNewFolder,
      handler,
      handlerFolder,
      closeHandler,
      CreatedNewFolder,
      closedNewFolder,
      closedNewFolderEvent,
    };
  },

};
</script>

<style scoped>
@import "../CSS/HomePage.css";
</style>