const { Router } = require ("express");

const MovieController = require("../controllers/MovieController")

const movieRoutes = Router();

const moviesController = new MovieController()

movieRoutes.post("/:user_id", moviesController.create);

module.exports = movieRoutes;