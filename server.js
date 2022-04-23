const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;

app.use(express.static("public"));
app.set("views engine", "ejs");


app.use("/", require("./routers/index"));
app.use("/features", require("./routers/features"));
app.use("/post", require("./routers/post"));
app.use("/contact", require("./routers/contact"));
app.use("/about", require("./routers/about"));
app.use("/news", require("./routers/news"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
)

