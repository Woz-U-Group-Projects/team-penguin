<<<<<<< Updated upstream
// module.exports = function(models) {
//     models.transaction.belongsToMany(models.users, 
//         { 
//             through: models.transaction,
//             foreignKey: 'userid'
//         });
// }
=======
module.exports = function(models) {
    // models.users.hasMany(models.transaction, {
    //     foreignKey: 'transactionid'
    // });
    models.transaction.belongsTo(models.users, {
        foreignKey: 'userId'
    });
}

// module.exports = function(models) {
//     models.actor.belongsToMany(models.film, 
//         { 
//             through: models.film_actor, // film_actor is the one that has both actor_id and film_id
//             foreignKey: 'actor_id'
//         });
//     models.film.belongsToMany(models.actor,
//         {
//             through: models.film_actor,
//             foreignKey: 'film_id'
//         });
// }

>>>>>>> Stashed changes
