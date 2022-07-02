module.exports = function(params) {
  return; // TODO - make this work again

  const { crashReporter } = require('electron');
  const os = require('os');
  const platformRelease = os.release();
  const arch = os.arch();
  const { uploadToServer, releaseChannel } = params;

  const parsedUploadToServer = uploadToServer !== null ? uploadToServer : false;

  crashReporter.start({
    productName: 'Atom',
    companyName: 'GitHub',
    submitURL: 'https://atom.io/crash_reports',
    parsedUploadToServer,
    extra: { platformRelease, arch, releaseChannel }
  });
};
