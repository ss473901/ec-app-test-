const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");
//追加
const path = require("path");

dotenv.config();

//mongoDBと接続
mongoose
  .connect(process.env.MONGO_HEROKU_URL || process.env.MONGO_URL)
  .then(() => {
    console.log("データベースと接続中・・・");
  })
  .catch((err) => {
    console.log(err);
  });

const corsOptions = {
  origin: ["https://startling-sorbet-ad40b4.netlify.app"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

//追加
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(process.env.PORT || 5003, () => {
  console.log("サーバーが起動しました。");
});
