const path = require('path');
const childProcess = require('child_process');

module.exports = function(packagePath) {
  const executablePath = path.join('node_modules', '.bin', 'electron-rebuild');
  childProcess.execFileSync(executablePath, ['.'], {
    cwd: packagePath
  });
};
