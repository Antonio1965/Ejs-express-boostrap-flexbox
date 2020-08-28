let db = require ('../database/models');
let sequelize = db.sequelize;

let moviesController = {
    list: function (req, res){
        sequelize.query ("SELECT * FROM movies")
            .then (function (resultados){
                let peliculas = resultados [0];
                res.send ('listadoDePeliculas',{peliculas:peliculas});    
            })

    },
    add: function (req, res){

    },
    create: function (req, res){
        
    },
    delete: function (req, res){

    }
};