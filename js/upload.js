function validateFileFormat(filePath) {
  var fileExtension = filePath.split(".").pop().toLowerCase();
  var allowedExtensions = {"jpg": true, "png": true, "gif": true};
  return allowedExtensions[fileExtension];
}
