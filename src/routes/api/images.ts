import express from "express";
import sharp from "sharp";
import path from "path";
const __dirname = path.resolve();

const images = express.Router();

const customized_img = async (
  f_name: string,
  width: number,
  height: number,
  final_img_dir: string
): Promise<sharp.OutputInfo> => {
  let data = await sharp(`${f_name}.jpg`)
    .resize(width, height)
    .toFile(final_img_dir);

  return data;
};

images.get("/", (req, res) => {
  let str_width: string = String(req.query.width);
  let str_height: string = String(req.query.height);
  let filename: string = String(req.query.filename);
  let width = parseInt(str_width);
  let height = parseInt(str_height);
  let new_img: string = `tempImage.jpg`;

  customized_img(filename, width, height, new_img);
  let dirPath = path.join(__dirname, `${new_img}`);
  res.sendFile(dirPath);
});

export { images, customized_img };
