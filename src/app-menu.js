const { app, Menu, shell } = require("electron");
const mainProcess = require("./index");

const template = [
  {
    label: "&File",
    submenu: [
      {
        label: "&Open File",
        accelerator: "CommandOrControl+O",
        click(item, focusedWindow) {
          if (focusedWindow) {
            return mainProcess.getFileFromUser(focusedWindow);
          }
          const newWindow = mainProcess.createWindow();
          newWindow.on("show", () => {
            mainProcess.getFileFromUser(newWindow);
          });
        }
      },
      { type: "separator" },
      { label: "E&xit", role: "quit" }
    ]
  },
  {
    label: "&Edit",
    submenu: [
      {
        label: "&Undo",
        accelerator: "CommandOrControl+Z",
        role: "undo",
      },
      {
        label: "&Redo",
        accelerator: "Shift+CommandOrControl+Z",
        role: "redo",
      },
      { type: "separator" },
      {
        label: "Cu&t",
        accelerator: "CommandOrControl+X",
        role: "cut",
      },
      {
        label: "&Copy",
        accelerator: "CommandOrControl+C",
        role: "copy",
      },
      {
        label: "&Paste",
        accelerator: "CommandOrControl+V",
        role: "paste",
      },
      { type: "separator" },
      {
        label: "Select All",
        accelerator: "CommandOrControl+A",
        role: "selectall",
      },
    ],
  },
  {
    label: "&View",
    submenu: [
      { label: "&Refresh", role: "reload" },
      {
        label: "Toggle Developer Tools",
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        },
        accelerator: "CommandOrControl+Shift+I"
      }
    ]
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "CommandOrControl+M",
        role: "minimize",
      },
      {
        label: "Close",
        accelerator: "CommandOrControl+W",
        role: "close",
      },
    ],
  },
  {
    label: "&Help",
    role: "help",
    submenu: [
      {
        label: "More &Info on Github",
        click() {
          shell.openExternal("https://github.com/miquifant/hello-electron#readme")
        },
        accelerator: "CmdOrCtrl+Shift+G"
      }
    ],
  },
];
  
if (process.platform === "darwin") {
  const name = app.getName();
  template.unshift({ label: name });
}

module.exports = Menu.buildFromTemplate(template);
