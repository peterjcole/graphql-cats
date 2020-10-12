/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('owners', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'owners',
		timestamps: false
		});
};
