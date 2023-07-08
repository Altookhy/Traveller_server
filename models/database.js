// const Sequelize = require('sequelize');
// const fs = require('fs')
// const path = require('path')
// const config = require('../configs/server_conf');

// db = {};

// const sequelize = new Sequelize(
//     config.db_settings.database,
//     config.db_settings.user,
//     config.db_settings.password,
//     config.db_settings.options);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.checkConnection = async function() {
//     sequelize.authenticate().then(() => {

//         console.log('Подключение к базе данных прошло успешно!');

//         //import db models
//         fs.readdirSync(path.join(__dirname, '..', 'models')).forEach(file => {
//             var model = sequelize.import(path.join(__dirname, '..', 'models', file));
//             db[model.name] = model;

//         });

//         sequelize.sync({
//             force: true
//         }).then(() => {
//             console.log('synchroniseModels: Все таблицы были созданы!');
//         }).catch(err => console.log(err));

//         mp.events.call("initServerFiles");

//     }).catch(err => {
//         console.error('Невозможно подключиться к базе данных:', err);
//     });
// }

// module.exports = db; 