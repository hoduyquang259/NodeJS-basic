// const fs = require("fs");
// const getListMusic = () => {
//   let result = fs.readFileSync("./src/music.json");
//   result = JSON.parse(result);
//   return result;
// };

// const updateListMusic = (data) => {
//   fs.writeFileSync("./src/music.json", JSON.stringify(data));
// };
// module.exports = {
//   getListMusic,
//   updateListMusic,
// };
const fs = require("fs");

const getListMusic = () => {
  let listMusic = fs.readFileSync("./src/music.json");
  listMusic = JSON.parse(listMusic);
  return listMusic;
};

const updateListMusic = (data) => {
  fs.writeFileSync("./src/music.json", JSON.stringify(data));
};
module.exports = {
  getListMusic,
  updateListMusic,
};
