const Ibox = require("../Schemas/iboxSchema");

//Create
exports.addIbox = (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    res.status(400).json({
      message: "You need to enter all the fields.",
    });
    return;
  }
  Ibox.create({ name, description, price })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong when creating the product.",
        err: err.message,
      });
    });
};

//Read
exports.getAlliboxes = (req, res) => {
  Ibox.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong when fetching all products.",
      });
    });
};

exports.getOneIbox = (req, res) => {
  Ibox.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Could not find product with that id.",
        });
        return;
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong when fetching the product.",
        err: err.message,
      });
    });
};
//Update
exports.updateIboxPrice = (req, res) => {
  const { price } = req.body;
  if (!price) {
    res.status(400).json({
      message: "You need to enter a new price!",
    });
    return;
  }
  Ibox.findByIdAndUpdate(req.params.id, { price }, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "That id does not correspond to any existing product.",
        });
        return;
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went very, very wrong when updating product price.",
        err: err.message,
      });
    });
};

//Delete

exports.removeIbox = (req, res) => {
  Ibox.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Could not find that product.",
        });
      }
      res.status(200).json({ id: data._id });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went very, very wrong when removing product.",
        err: err.message,
      });
    });
};
