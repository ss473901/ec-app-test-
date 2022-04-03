const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

app.use(express.json());

dotenv.config();

//mongoDBと接続
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("データベースと接続中・・・");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("サーバーが起動しました。");
});
