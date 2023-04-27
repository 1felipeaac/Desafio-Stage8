const { Router } = require ("express");

const TagController = require("../controllers/TagsController");

const tagRoutes = Router();

const tagsController = new TagController();

tagRoutes.get("/:user_id", tagsController.index);

module.exports = tagRoutes;