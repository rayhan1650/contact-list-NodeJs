const express = require("express");
const contactRouter = require("./Routes/Contact/contactRoute");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("<h1>Contact list server running.</h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>Please use correct route</h1>");
});

app.listen(port, () => {
  console.log(`Contact list running at port ${port}`);
});
