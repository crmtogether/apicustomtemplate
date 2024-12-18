require("dotenv").config();
var express = require("express");
const cors = require("cors");

//demo screens
//these contain hardcoded json that the app expects. You can modify these to show your own data
var metadata_init = require(".././metadata/init.json");
var metadata_login = require(".././metadata/login.json");
var metadata_logout = require(".././metadata/logout.json");
var metadata_getscreensetup = require(".././metadata/getscreensetup.json");

var router = express.Router();

//init...loads logon screen and logo
router.get("/", (req, res) => {
    reqHostUrl = `${req.protocol}://${req.get("host")}`;
    metadata_init.screenMetadata.thisurl=reqHostUrl;//this is just to show how you can update the json the app expects back
    res.json(metadata_init);
});

//login - do your license check here also if needed
router.post("/login", async (req, res, next) => {
    console.log("login",req);
    res.json(metadata_login);
});

//log out
router.post("/logout", async (req, res, next) => {
    console.log("logout",req);
    res.json(metadata_logout);
  });

router.post("/getScreenSetup", async (req, res, next) => {
    console.log("getScreenSetup",req);
    res.json(metadata_getscreensetup);
});  

module.exports = router;

