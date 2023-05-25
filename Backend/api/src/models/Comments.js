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
            type: DataTypes.TEXT,
            allowNull: false,            
        },

        score: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true, 
        },
    },
    {
      paranoid: true,    
      timestamps: true,     
    }
  )
}