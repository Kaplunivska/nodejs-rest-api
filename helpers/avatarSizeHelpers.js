const jimp = require("jimp");

const avatarSize = async (imgPath) => {
    const image = await jimp.read(imgPath);
    await image.resize(250, 250);
    await image.writeAsync(imgPath);
};
  
module.exports = avatarSize;