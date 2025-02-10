const favoriteRouter = require("express").Router();
const { Favorite } = require("../../db/models");

favoriteRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const all = await Favorite.findAll();
      res.json(all);
      console.log("-----------", all);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: "Ошибка получения всех Favorite",
      });
    }
  })
  .post(async (req, res) => {
    try {
      // const { id } = req.params;
      const { id, title, img, price } = req.body;
      const newItem = await Favorite.create({
        id,
        title,
        img,
        price,
      });
      res.status(201).json(newItem);
      console.log(newItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: "Ошибка добавления item в favorite",
      });
    }
  });

favoriteRouter.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      text: "Ошибка удаления item из favorite",
    });
  }
});

module.exports = favoriteRouter;
