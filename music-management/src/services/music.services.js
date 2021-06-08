//fs: file system được cài sẵn trong nodeJS và lôi ra sử dụng
const fs = require("fs");

const getListMusic = () => {
  //đọc data từ file: tránh bất đồng bộ
  //đường dẫn bắt đầu từ thư mục mở terminal đi vào
  let result = fs.readFileSync("./src/music.json");
  //chuyển luôn từ buffer( mảng nhị phân) sang json
  result = JSON.parse(result);
  console.log(result);
  console.log("result: ", result); // Kết quả ra mảng có thể sử dụng được
  return result;
};

const updateListMusic = (data) => {
  //tham số 1 là đường dẫn, tham số 2 là dùng JSON.stringify() để chuyển object sang JSON
  fs.writeFileSync("./src/music.json", JSON.stringify(data));
};

module.exports = {
  getListMusic,
  updateListMusic,
};
