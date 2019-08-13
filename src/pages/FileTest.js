import React from "react";

function FileTest() {
  const local = JSON.parse(localStorage.getItem("file"));
  console.log(local);
  const img = dataURLtoFile(local.file, "img");
  console.log(img);

  return <img src={local.file} />;

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
}

export default FileTest;
