/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('colours', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		slug: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'colours',
		timestamps: false
		});
};
