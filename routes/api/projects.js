const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router.route("/")
//find all entries of all types
.get(projectsController.findAll)

module.exports = router;