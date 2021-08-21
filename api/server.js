const express = require("express");
const app = express();
const port = 3001;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api/users", function (req, res) {
  if (req.body.firstName === "error") {
    res.status(400).jsonp({
      status: "error",
      message: "Invalid Subscription request.",
    });
  } else {
    res.json({
      status: "success",
      message: "Thank you. You are now subscribed.",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
