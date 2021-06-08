// const { string, number } = require("yargs");
// const yargs = require("yargs");
// const chalk = require("chalk");
// // const { string, require } = require("yargs");
// const { getListMusic, updateListMusic } = require("./services/music.services");
// const { get } = require("http");
// //tạo lệnh thay thế cho button
// yargs.command({
//   command: "get-all",
//   handler: () => {
//     let listMusic = getListMusic();
//     console.log(listMusic);
//   },
// });

// //add Music
// // yargs.command({
// //   command: "add",
// //   builder: {
// //     name: { type: string },
// //     author: { type: string },
// //     like: { type: number },
// //   },
// //   handler: (args) => {
// //     const { name, author, like } = args;
// //     // console.log(name, author, like);
// //     let listMusic = getListMusic();
// //     listMusic = [
// //       ...listMusic,
// //       { id: Math.random().toString(), name, author, like },
// //     ];
// //     updateListMusic(listMusic);
// //     console.log("add music successfully: ", listMusic);
// //   },
// // });
// yargs.command({
//   command: "add",
//   builder: {
//     name: { type: string },
//     author: { type: string },
//     like: { type: number },
//   },
//   handler: (args) => {
//     const { name, author, like } = args;
//     let listMusic = getListMusic();
//     listMusic = [
//       ...listMusic,
//       { id: Math.random().toString(), name, author, like },
//     ];
//     updateListMusic(listMusic);
//     console.log("Add music successfully!", listMusic);
//   },
// });
// //Delete Music
// yargs.command({
//   command: "remove",
//   builder: {
//     id: { type: string },
//   },
//   handler: (args) => {
//     const { id } = args;
//     let listMusic = getListMusic();
//     listMusic = listMusic.filter((item) => item.id !== id);
//     updateListMusic(listMusic);
//     console.log("Remove music successfully!", listMusic);
//   },
// });

// //Edit Music
// // yargs.command({
// //   command: "update",
// //   builder: {
// //     id: { type: string },
// //     name: { type: string },
// //     author: { type: string },
// //     like: { type: number },
// //   },
// //   handler: (args) => {
// //     const { id, name, author, like } = args;
// //     let listMusic = getListMusic();
// //     const index = listMusic.findIndex((item) => item.id == id);
// //     console.log(index);
// //     if (index !== -1) {
// //       let music = listMusic[index];
// //       music = { ...music, name, author, like };
// //       listMusic[index] = music;
// //       updateListMusic(listMusic);
// //       console.log("Edit music successfully!", listMusic);
// //     } else {
// //       console.log("id khong hop le! ");
// //     }
// //   },
// // });

// yargs.command({
//   command: "update",
//   builder: {
//     id: { type: string },
//     name: { type: string },
//     author: { type: string },
//     like: { type: number },
//   },
//   handler: (args) => {
//     const { id, name, author, like } = args;
//     let listMusic = getListMusic();
//     const index = listMusic.findIndex((item) => item.id == id);
//     if (index !== -1) {
//       let musicID = listMusic[index];
//       listMusic[index] = { ...musicID, name, author, like };
//       updateListMusic(listMusic);
//       console.log("update sucessfully!", listMusic);
//     } else {
//       console.log("id khong hop le!");
//     }
//   },
// });

// //get detail
// yargs.command({
//   command: "get-detail",
//   builder: {
//     id: { type: string },
//   },
//   handler: (args) => {
//     const { id } = args;
//     let listMusic = getListMusic();
//     const music = listMusic.find((item) => item.id == id);
//     console.log("music found is: ", music);
//   },
// });
// // Lưu lại các câu lệnh đã tạo ra ở trên
// yargs.parse();

const yargs = require("yargs");
const chalk = require("chalk");
const { string, number } = require("yargs");
const { getListMusic, updateListMusic } = require("./services/music.services");
//get ListMusic
yargs.command({
  command: "get-all",
  handler: () => {
    let listMusic = getListMusic();
    console.log(listMusic);
  },
});

//add Music
yargs.command({
  command: "add",
  builder: {
    name: { type: string },
    author: { type: string },
    like: { type: number },
  },
  handler: (args) => {
    const { name, author, like } = args;
    let listMusic = getListMusic();
    listMusic = [
      ...listMusic,
      { id: Math.random().toString(), name, author, like },
    ];
    updateListMusic(listMusic);
    console.log("add music successfully!", listMusic);
  },
});

//Remove music
yargs.command({
  command: "remove",
  builder: {
    id: { type: string },
  },
  handler: (args) => {
    const { id } = args;
    let listMusic = getListMusic();
    listMusic = listMusic.filter((item) => item.id !== id);
    updateListMusic(listMusic);
    console.log("remove music successfully!", listMusic);
  },
});

//update music
yargs.command({
  command: "update",
  builder: {
    id: { type: string },
    name: { type: string },
    author: { type: string },
    like: { type: number },
  },
  handler: (args) => {
    const { id, name, author, like } = args;
    let listMusic = getListMusic();
    const index = listMusic.findIndex((item) => item.id == id);
    if (index !== -1) {
      let music = listMusic[index];
      listMusic[index] = { ...music, name, author, like };
      updateListMusic(listMusic);
      console.log("update music successfully!", listMusic);
    } else {
      console.log("id khong hop le");
    }
  },
});

//get detail music
yargs.command({
  command: "get-detail",
  builder: {
    id: { type: string },
  },
  handler: (args) => {
    const { id } = args;
    let listMusic = getListMusic();
    const music = listMusic.find((item) => item.id == id);
    console.log("music found is: ", music);
  },
});
yargs.parse();
