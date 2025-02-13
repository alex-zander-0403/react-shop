const cartRouter = require("express").Router();
const { Cart } = require("../../db/models");

cartRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const cartItems = await Cart.findAll();
      res.json(cartItems);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: "Ошибка получения всех cartItems",
      });
    }
  })
  .post(async (req, res) => {
    try {
      const { id, title, img, price } = req.body;
      const newItem = await Cart.create({
        id,
        title,
        img,
        price,
      });
      res.status(201).json(newItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: "Ошибка добавления item в корзину",
      });
    }
  })
  // Удаляем все записи в корзине
  .delete(async (req, res) => {
    try {
      await Cart.destroy({ where: {} });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: "Ошибка при очистке корзины",
      });
    }
  });

cartRouter.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      text: "Ошибка удаления cartItem",
    });
  }
});

module.exports = cartRouter;
