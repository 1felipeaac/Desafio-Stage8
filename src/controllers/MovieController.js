const knex = require("../database/knex");

class MovieController{
    async create(request, response){
        const {title, description, rating, tags} = request.body;
        const {user_id} = request.params;

        const [movie_id] = await knex("movies").insert({
            title, 
            description, 
            rating, 
            user_id
        });

        const tagsInsert = tags.map(name =>{
            return{
                name,
                movie_id,
                user_id
            }
        })

        await knex("tags").insert(tagsInsert);

        response.json();

    }
}

module.exports = MovieController;