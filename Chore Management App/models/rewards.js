module.exports = function (sequelize, DataTypes) {
    const rewards = sequelize.define("rewards", {
        reward_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reward_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reward_points_required: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reward_category:
            {
                type: DataTypes.STRING,
                allowNull: false
            }
    });

    return rewards
};
