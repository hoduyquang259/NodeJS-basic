//chuẩn common JS
//fs: file system được cài sẵn trong nodeJS và lôi ra sử dụng
const { string, number } = require("yargs");
const yargs = require("yargs");
const chalk = require("chalk");
//bóc tách và import các function từ file music.services.js
const { getListMusic, updateListMusic } = require("./services/music.services");
// const { updateListMusic } = require("./services/music.services");
//get all music
/**
 * gõ vào terminal:
 *      node src/app.js get-all
 */

//tạo lệnh thay thế cho button
yargs.command({
  command: "get-all", //tên xử lý
  handler: () => {
    //gọi hàm trong lệnh đưa kết quả trả về vào biến listMusic
    let listMusic = getListMusic();
    // console.log("Đây là phương thức get all");
    console.log(chalk.red("listMusic: "), listMusic);
    // updateListMusic(listMusic);
  },
});

//add music
yargs.command({
  command: "add",
  //truyền tham số vào
  builder: {
    name: { type: string },
    author: { type: string },
    like: { type: number },
  },
  handler: (args) => {
    console.log("Đây là hàm add music");
    //bóc tách data ở trên builder
    const { name, author, like } = args;
    // console.log(name, author, like);
    let listMusic = getListMusic();
    //thêm phần tử mới vào listMusic, dùng spreadOperator để copy và tạo id ngẫu nhiên dạng chuỗi
    listMusic = [
      ...listMusic,
      { id: Math.random().toString(), name, author, like },
    ];
    //gọi hàm update
    updateListMusic(listMusic);
    console.log("thêm thành công");
  },
});
// gõ lệnh để add music ./src/app.js add --name="Lac Trôi" --author="MTP" --like=2500

//remove music
/**
 * gõ vào terminal:
 * node src/app.js remove --id="âsa"
 */
yargs.command({
  command: "remove",
  builder: {
    id: {
      type: string,
    },
  },
  handler: (args) => {
    const { id } = args;
    let listMusic = getListMusic();
    listMusic = listMusic.filter((music) => music.id !== id);
    updateListMusic(listMusic);
    console.log("xóa thành công");
  },
});

//update music
/**
 * gõ vào terminal:
 * node src/app.js update --id="âsa" --name="" --autho...
 */
yargs.command({
  command: "update",
  builder: {
    id: {
      type: string,
    },
    name: {
      type: string,
    },
    author: {
      type: string,
    },
    like: {
      type: number,
    },
  },
  handler: (args) => {
    const { id, name, author, like } = args;
    let listMusic = getListMusic();
    const index = listMusic.findIndex((music) => music.id == id);
    if (index !== -1) {
      let music = listMusic[index];
      music = { ...music, name, author, like };
      listMusic[index] = music;
      updateListMusic(listMusic);
      console.log("update thành công");
    } else {
      console.log("id không hợp lệ");
    }
    console.log(id, name, author, like);
  },
});

//get detail music
/**
 * gõ vào terminal:
 * node src/app.js get-detail --id="âsa"
 */
yargs.command({
  command: "get-detail",
  builder: {
    id: {
      type: string,
    },
  },
  handler: (args) => {
    const { id } = args;
    let listMusic = getListMusic();
    const music = listMusic.find((music) => music.id == id);
    console.log("music: ", music);
  },
});
//QUAN TRỌNG: lưu lại các câu lệnh tạo ra ở trên
yargs.parse();
