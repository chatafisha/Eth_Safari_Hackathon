// LEADER
var express = require("express");
var plasticRouter = express.Router();
var multer = require("../../middleware/upload");

// session
var session = require("../../middleware/sessionMaster");

// plastic requst controller
var plastic_controller = require("../../controller/plastic/collection.plastic");
const setContentTypeHeader = require("../../middleware/setHeader");

// here inspection take place to make sure everyone has token!!
plasticRouter.use(session.verifyToken);


// regist plastic data
plasticRouter.post(
  '/plastic_data',
  setContentTypeHeader,
  multer.array('img'),
  plastic_controller.registPlastic
)

// display all registered plastic data
plasticRouter.get("/plastic_data",plastic_controller.displayData);


// export module
module.exports = plasticRouter;