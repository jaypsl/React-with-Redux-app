require("./node_modules/dotenv").config();
const express = require("./node_modules/express");
const formData = require("./node_modules/express-form-data");
const cors = require("./node_modules/cors");
const { CLIENT_ORIGIN } = require("./config");
var path = require("path");
var parentDir = path.dirname(__dirname);

const app = express();
var fs = require("fs");

var bodyParser = require("./node_modules/body-parser");
var multer = require("./node_modules/multer");

var dir = path.join(__dirname, "public/images");
app.use(express.static(dir));

app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: "/tmp" });

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(formData.parse());

app.get("/", (req, res) => {
  res.send("Server is running, You can upload the images!!");
});

app.post("/file_upload", upload.single("file"), (req, res) => {
  var file = parentDir + "/server/public/images/" + req.files[0].name;
  fs.readFile(req.files[0].path, (err, data) => {
    fs.writeFile(file, data, err => {
      if (err) {
        console.error(err);
        response = {
          message: "Sorry, file couldn't be uploaded.",
          author: req.files[0].name
        };
      } else {
        response = {
          message: "File uploaded successfully",
          imageRes: {
            author: req.files[0].name,
            download_url: req.files[0].name,
            local: true
          }
        };
      }
      res.end(JSON.stringify(response));
    });
  });
});

app.listen(process.env.PORT || 8080, () => console.log("👍"));
