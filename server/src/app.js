const express = require("express");
const itemRouter = require("./routers/itemRouter");
const cartRouter = require("./routers/cartRouter");
const favoritesRouter = require("./routers/favoritesRouter");

const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/api/items", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/favorites", favoritesRouter);

module.exports = app;
