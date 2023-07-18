// module.exports = (sequelize, DataTypes) => {
//     const Disease = sequelize.define("Disease", {
//         country: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         disease: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         vaccine: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         cases: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     });
//     return Disease;
// };
 

module.exports = (sequelize, DataTypes) => {
    const Disease = sequelize.define("Disease", {
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        disease: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vaccine: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cases: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT, // Adjust the data type based on your requirements
            allowNull: true
        },
        magnitude: {
            type: DataTypes.FLOAT, // Adjust the data type based on your requirements
            allowNull: true
        }
    });
    return Disease;
};
