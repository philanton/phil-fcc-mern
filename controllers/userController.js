const User = require('../models/Users');

module.exports = {
  checkUser: (req, res, next) => {
    User.findOne({username: req.body.username})
        .then(user => user ? res.json({error: "User with provided username already exists! - "}) : next())
        .catch(() => next());
  },
  findUser: (req, res, next) => {
    User.findById(req.params._id)
        .then(() => next())
        .catch(() => res.json({error: "No user with provided username!"}));
  },
  createUser: (req, res, next) => {
    User.create({username: req.body.username})
        .then(user => res.json(user))
        .catch(err => res.status(422).json(err));
  },
  getUsers: (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(422).json(err));
  },
  addExercise: (req, res) => {
    User.findByIdAndUpdate(
      req.params._id,
      {$push: {log: req.body}, $inc: {count: 1}},
      {new: true}
    ).lean().then(user => {
      const { username, _id, count, log} = user;
      return res.json({
        username,
        _id,
        description: log[log.length - 1].description,
        duration: log[log.length - 1].duration,
        date: log[log.length - 1].date.toDateString()
      });
    }).catch(err => res.status(422).json(err));
  },
  getLogs: (req, res) => {
    User.findById(req.params._id)
        .lean()
        .then(user => {
          const from = req.query.from ?? "1970-01-01";
          const to = req.query.to ?? "2200-12-31";

          user.log = user.log.filter((log) => {
            return log.date >= new Date(from) && log.date <= new Date(to);
          });

          if(req.query.limit) user.log = user.log.slice(0, req.query.limit);
          user.count = user.log.length;

          res.json(user);
        })
        .catch(err => res.status(422).json(err));
  }
}
