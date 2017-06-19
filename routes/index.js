const express = require('express');
const router = express.Router();
const multer = require('multer');

router.get('/', (req, res, next) => {
  res.render('index', {title: 'File Metadata Microservice'});
});

const multerOptions = {
  storage: multer.memoryStorage(),
  limits: {
    // ~5mb limit
    fileSize: 5000000,
  },
};

const upload = multer(multerOptions).single('file');

router.post('/api/filesize', upload, (req, res) => {
  res.json({size: req.file.size});
});

module.exports = router;
