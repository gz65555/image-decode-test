const sharp = require("sharp");
const fs = require("fs");

const directoryExisting = fs.existsSync("./imgs");

if (!directoryExisting) {
	fs.mkdirSync("./imgs");
}

let index = 0;

const basic = sharp("template_img/1.jpg");
basic.constructor.prototype.toImagesFile = function () {
	index++;
	this.toFile(`imgs/${index}.jpg`);
};

basic.toImagesFile();

for (let i = 0; i < 100; i++) {
	basic.blur(i + 1);
	const a = Math.ceil(Math.random() * 10) / 10;
	const b = Math.ceil(Math.random() * 10) / 10;
	basic.linear(a, b).toImagesFile();
}
