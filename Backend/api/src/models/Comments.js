const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "comments",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },

        text: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

        like: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true, 
        },

        unlike: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true, 
        },

        image: { 
          type: DataTypes.STRING(500),
          allowNull: false,
        },

        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
    {
      paranoid: true,    
      timestamps: true,     
    }
  )
}