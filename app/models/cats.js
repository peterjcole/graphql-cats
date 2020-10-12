/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cats', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		colour_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		favourite_food_id: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		owner_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		on_holiday_at_owner_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'cats',
		timestamps: false
		});
};
