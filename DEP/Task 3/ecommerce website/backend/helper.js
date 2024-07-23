const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');

function connectMongodb() {
  mongoose
    .connect("mongodb://localhost:37017/e-comm")
    .then(() => {
      console.log("connected with mongoDB");
    })
    .catch((error) => {
      console.log("Failed to connect with mongoDB. error: " + error.message);
    });
}

const storage = multer.diskStorage({
    destination:"./uploads/images",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

module.exports = {
    connectMongodb,
    upload
}
