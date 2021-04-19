const Shortener = require('../models/Shorteners');
const dns = require('dns');

function convertToOtherNames(names, obj) {
  const new_obj = {};
  for(name of Object.keys(names)) {
    new_obj[name] = obj[names[name]];
  }
  return new_obj;
}

function convertFieldsForFCC(obj) {
  return convertToOtherNames({
    "original_url": "url",
    "short_url": "_id"
  }, obj);
}

module.exports = {
  checkOriginalUrl: (req, res, next) => {
    Shortener.findOne({url: req.body.url})
             .then(shortener => {
               if(shortener) {
                 res.json(convertFieldsForFCC(shortener));
               } else {
                 next();
               }
             })
             .catch(err => res.status(422).json(err));
  },
  createShortener: (req, res) => {
    const newShortener = {
      url: req.body.url
    };

    Shortener.create(newShortener)
             .then(newShortener => res.json(convertFieldsForFCC(newShortener)))
             .catch(err => res.status(422).json(err));
  },
  validateUrl: (req, res, next) => {
    dns.lookup(req.body.url, (err, addr, family) => {
      if(addr === undefined) {
        res.json({error: "invalid url"});
      } else {
        next();
      }
    });
  },
  findOneByShortUrl: (req, res) => {
    Shortener.findById(req.params.uuid)
             .then(shortener => {
               if(shortener) {
                 res.redirect(shortener.url);
               } else {
                 res.redirect('/');
               }
             })
             .catch(err => res.status(422).json(err));
  }
}
