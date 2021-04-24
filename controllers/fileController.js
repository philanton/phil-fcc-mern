module.exports = {
  getFileInfo: (req, res) => {
    res.json({
      name: req.files.upfile.name,
      type: req.files.upfile.mimetype,
      size: req.files.upfile.size
    });
  },
};
