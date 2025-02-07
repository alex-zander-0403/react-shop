const coffeesRouter = require("express").Router();
const { Item } = require("../../db/models");

coffeesRouter.route("/").get(async (req, res) => {
  try {
    const allCoffees = await Item.findAll();
    res.json(allCoffees);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: "Ошибка получения всех Item" });
  }
});

module.exports = coffeesRouter;
