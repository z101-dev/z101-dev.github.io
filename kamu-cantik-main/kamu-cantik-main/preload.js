const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendWindowControl: (command) => ipcRenderer.send('window-control', command)
});