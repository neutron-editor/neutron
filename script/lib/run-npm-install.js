'use strict';

const childProcess = require('child_process');

const CONFIG = require('../config');

module.exports = function(packagePath) {
  childProcess.execFileSync(CONFIG.getNpmBinPath(), ['install', '--no-audit'], {
    cwd: packagePath
  });
};
