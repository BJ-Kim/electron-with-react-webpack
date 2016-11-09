var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './rencar-win32-x64',
  outputDirectory: './installer-win32-x64',
  exe: 'rencar.exe',
  setupExe: 'RencarSetup.exe'
});

resultPromise.then(function () {
  console.log("It worked!");
}, function (e) {
  console.log('No dice: ' + e.message);
});
