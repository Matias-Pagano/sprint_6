const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, './database/models/image'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = upload;