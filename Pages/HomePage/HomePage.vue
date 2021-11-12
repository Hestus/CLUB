<template>
  <div
    @click.right="handleHomePageContextMenu($event)"
    @click="handleContextMenuClosing()"
    class="homepage"
  >
    <img :src="homePageImageLink" alt="wallpaper" />

    <!-- Files and folder location -->
    <div class="homepage_overlay">
      <div class="homepage_folder_files_location">
        <ul>
          <li
            @click="handleContextMenuClosing()"
            tabindex="1"
            v-for="(folder, index) in folders"
            :key="index"
            @click.right="handleFolderContextMenu($event, index)"
          >
            <img :src="folder.img" alt="..." />
            <!-- TODO: -->
            <span v-if="renameFolder === false" class="ff_viga span-white">{{
              folder.folder_name
            }}</span>
            <input v-if="renameFolder === true" type="text" />
            <!-- TODO: -->
          </li>
        </ul>
        <!-- Context Menu -->
        <ContextMenu
          @creatingNewFolder="createdNewFolder($event)"
          @changeHomePageBackground="ChangeHomePageBackgroundImage($event)"
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
          @changedFolderName="changeFolderNameNow($event)"
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
    <!-- Add New background image -->
    <HomePageBackgroundChange
      @closeNewImageUrl="closedNewImageUrl($event)"
      @closeNewURLOnHandleSubmit="ClosedNewURLEvent($event)"
      v-if="changeHomePageBackground === true"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import ContextMenu from "../../components/ContextMenu/ContextMenu.vue";
import ContextMenuFolder from "../../components/ContextMenu/ContextMenuFolder.vue";
import NewFolder from "../../components/NewFolder/NewFolder.vue";
import HomePageBackgroundChange from "../../components/HomePageBackground/BackgroundChange.vue";

export default {
  components: {
    ContextMenu,
    NewFolder,
    ContextMenuFolder,
    HomePageBackgroundChange,
  },

  setup() {
    // HomePage Image Link
    const homePageImageLink = ref(
      "https://images.unsplash.com/photo-1576442849893-92c987a8ef80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
    );
    // Opening Context Menu
    const context_menu = ref(false);
    const context_menu_folder = ref(false);
    const context_menu_taskbar = ref(false);
    //   mouse click location
    const mouseX = ref("0");
    const mouseY = ref("0");
    // Create new folder
    const createNewFolder = ref(false);
    // Change HomePage background
    const changeHomePageBackground = ref(false);
    // Change Folders name
    const renameFolder = ref(false);
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
    function handleFolderContextMenu(e, index) {
      context_menu.value = false;
      context_menu_folder.value = true;
      mouseX.value = e.clientX + "px";
      mouseY.value = e.clientY - 60 + "px";
      console.log(mouseX.value, mouseY.value);
      e.preventDefault(index);
      console.log(index);
    }

    // Closing Handler
    function handleContextMenuClosing() {
      context_menu.value = false;
      context_menu_folder.value = false;
      // console.log(index);
    }

    // Create new folder
    function createdNewFolder(foldercreateValue) {
      createNewFolder.value = foldercreateValue;
      console.log(createNewFolder.value);
    }

    // closing new folder
    function closedNewFolder(folderCloseValue) {
      createNewFolder.value = folderCloseValue;
      console.log(createNewFolder.value);
    }

    // Closing new folder event
    function closedNewFolderEvent({
      closingNewFolderBool,
      folder_new_name_now,
    }) {
      console.log(closingNewFolderBool, folder_new_name_now);
      createNewFolder.value = closingNewFolderBool;
      folders.value.push({
        id: 3,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: folder_new_name_now,
      });
    }

    // Rename Folder Name
    function changeFolderNameNow(changeFolderName) {
      renameFolder.value = changeFolderName;
      console.log(renameFolder.value, folders.value.id);
    }

    // Opening Background Image change
    function ChangeHomePageBackgroundImage(backgroundChangeValue) {
      changeHomePageBackground.value = backgroundChangeValue;
      console.log("Background Change Dialog Box Opens");
    }

    // Closing Background Image Change Close
    function closedNewImageUrl(closeBackgroundChangeValue) {
      changeHomePageBackground.value = closeBackgroundChangeValue;
      console.log("Background Change Dialog Box Closed");
    }

    // Closing New Background Image URL event
    function ClosedNewURLEvent({ closingNewURLBool, image_new_url_now }) {
      console.log(closingNewURLBool, image_new_url_now);
      changeHomePageBackground.value = closingNewURLBool;
      homePageImageLink.value = image_new_url_now;
    }

    return {
      homePageImageLink,
      context_menu,
      context_menu_folder,
      context_menu_taskbar,
      mouseX,
      mouseY,
      folders,
      createNewFolder,
      changeHomePageBackground,
      renameFolder,
      handleHomePageContextMenu,
      handleFolderContextMenu,
      handleContextMenuClosing,
      createdNewFolder,
      closedNewFolder,
      closedNewFolderEvent,
      ChangeHomePageBackgroundImage,
      closedNewImageUrl,
      ClosedNewURLEvent,
      changeFolderNameNow,
    };
  },
};
</script>

<style scoped>
@import "../CSS/HomePage.css";
</style>