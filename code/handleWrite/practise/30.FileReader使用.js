function uploadMulFile (uploadFile) {
  return new Promise((resolve, reject) => {
    let fileLength = 0;
    let reader = new FileReader();
    reader.readAsText(uploadFile[fileLength]);
    reader.onabort = function (e) {
      console.log("文件读取异常");
    }
    reader.onerror = function (e) {
      console.log("文件读取错误");
    }

    reader.onload = function (e) {
      if (e.target.result) {

        fileLength++;
        if (fileLength < uploadFile.length) {
          reader.readAsText(uploadFile[fileLength]);
        } else {
          resolve({
            carArr,
            crossArr,
            roadArr
          })
        }
      }
    }
  })
}
