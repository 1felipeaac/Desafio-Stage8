const { Router } = require ("express");

const MovieController = require("../controllers/MovieController")

const movieRoutes = Router();

const moviesController = new MovieController()

movieRoutes.get("/", moviesController.index);
movieRoutes.post("/:user_id", moviesController.create);
movieRoutes.get("/:id", moviesController.show);
movieRoutes.delete("/:id", moviesController.delete);

module.exports = movieRoutes;