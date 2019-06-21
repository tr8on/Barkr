const Sequelize = require('sequelize')

// const db = new Sequelize({
//   dialect: 'postgres',
//   database: "project_dog_db"
// });

const db = new Sequelize(process.env.DATABASE_URL , {
  dialect: 'postgres'
});


const  Dog = db.define("dogs", {
  
    name: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    age: Sequelize.INTEGER,
    breed: Sequelize.STRING,
    gender: Sequelize.STRING,
    description: Sequelize.TEXT
    
  });

const Owner = db.define("owners",{
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING
});
 

 Dog.belongsTo(Owner);
 Owner.hasMany(Dog,{onDelete:'cascade'});
 

module.exports = {
   Dog,
  db,
  Owner
};
