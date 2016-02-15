function isValidFileFormat(filePath) {
  var fileExtension = filePath.split(".").pop().toLowerCase();
  var allowedExtensions = {"jpg": true, "png": true, "gif": true};
  return allowedExtensions[fileExtension];
}

window.onload = function() {
  var fileInput = document.getElementById('file_upload');
  fileInput.addEventListener("change", function(e) {
    var notAllowedFileFormat = !isValidFileFormat(fileInput.value);
    if(notAllowedFileFormat) {
      window.alert("Error: unsupported image file format. Please submit the file as a jpg, png or gif.")
      fileInput.value = "";
    }
    if(fileInput.value) {
      fileInput.style.backgroundImage = "url(images/loading_spinner.gif)";
      fileInput.style.backgroundColor = "white";
    } else {
      fileInput.style.cssText = ""; 
    }
  });
};
