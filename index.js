const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var window = null;

app.on('ready', function() {
	window = new BrowserWindow({
		width: 800,
		height: 600
	});
	//window.loadURL('http://localhost:8080/index.html');
	window.loadURL(`file://${__dirname}/dist/index.html`);
	window.webContents.openDevTools();
	window.on('closed', () => {
		delete window;
	});
});