const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../public/images/productImages'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
}); 

// const imageFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith("image")) {
//       cb(null, true);
//     } else {
//       cb("Please upload only images.", false);
//     }
//   };
  
//   var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, __basedir + "/resources/static/assets/uploads/");
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
//     },
//   });
  
//   var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
//   module.exports = uploadFile;
//   In the code above, we’ve done these steps:
//   – First, we import multer module.
//   – Next, we configure multer to use Disk Storage engine.
//   – We also define a filter to only allow images to pass.
  
//   You can see that we have two options here:
//   – destination determines folder to store the uploaded files.
//   – filename determines the name of the file inside the destination folder.
//   – We add the [timestamp]-bezkoder- prefix to the file’s original name to make sure that the duplicates never occur.

const upload = multer({ storage });

module.exports = upload;