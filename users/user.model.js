const { DataTypes } = requires('sequalize');

module.exports = model;

function model(sequalize) {
    const attributes = {
        email: {type: DataTypes.STRING, allowNull: false},
        passwordHash: {type: DataTypes.STRING, allowNull: false},
        tittle: {type: DataTypes.STRING, allowNull: false},
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        role: {type: DataTypes.STRING, allowNull: false},
    };

    const options = {
        defaultScope: {
            
            attributes: { exclude: ['passwordHash']}
        },
        scopes: {

            withHash: {attributes: {}, }
        }
    };

    return sequalize.define('User', attributes,options);
}