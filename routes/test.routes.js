module.exports = app => {
    const test = require("../controllers/test.controller.js");
  
    var router = require("express").Router();
  
    router.get("/testResponse", test.testResponse);

    router.get("/thirdPartyLogin", test.thirdPartyLogin);

    app.use('/api/test', router);
  };