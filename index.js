const express = require("express");
const contactRouter = require("./Routes/Contact/contactRoute");
const app = express();
const port = process.env.PORT || 5000;

app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("<h1>Contact list server running.</h1>");
});

app.listen(port, () => {
  console.log(`Contact list running at port ${port}`);
});
