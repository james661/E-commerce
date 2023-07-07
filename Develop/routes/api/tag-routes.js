// Require all necessary dependencies
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// All requests for `/api/tags`

router.get("/", (req, res) => {
  // Finds all tags
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => {
      res.status(200).json(tags);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // Gets one tag by its id
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    // reference one tag not tags, retrieves it
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // Creates a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // Updates a tag by its id
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // Deletes a tag by its id
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
