const sharp = require("sharp");

let index = 0;

const basic = sharp("template_img/1.jpg");
basic.constructor.prototype.toImagesFile = function () {
  index++;
  this.toFile(`imgs/${index}.jpg`);
};

basic.toImagesFile();

for (let i = 0; i < 500; i++) {
  basic.blur(i + 1);
  const a = Math.ceil(Math.random() * 10) / 10;
  const b = Math.ceil(Math.random() * 10) / 10;
  basic.linear(a, b).toImagesFile();
}
