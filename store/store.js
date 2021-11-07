import { createStore } from "vuex";

export const store = createStore({
  state: {
    context_menu: false,
    context_menu_folder: false,
    context_menu_taskbar: false,
    // Mouse Movement Coordinates
    mouseX: 0,
    mouseY: 0,
    // Folders
    folders: [
      {
        id: 1,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: "manas",
      },
      {
        id: 2,
        img: "https://i.ibb.co/g60bQdw/file-home-logo.png",
        folder_name: "mishra",
      },
    ],
    // Create new folder
    CreateNewFolder: false,
  },
  mutations: {
    // Right Click on homepage Handler
    handler(state, e) {
      if (state.context_menu_folder === false) {
        state.context_menu = true;
        state.mouseX = e.clientX + "px";
        state.mouseY = e.clientY - 60 + "px";
        console.log(state.mouseX, state.mouseY);
        e.preventDefault();
      }
    },
  },
});
