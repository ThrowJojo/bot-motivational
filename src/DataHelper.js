// @flow
import Sequelize from 'sequelize';
import Config from './config.json';

let sequelize: Sequelize = new Sequelize(Config.database_name, Config.database_user, Config.database_password, {
    dialect: 'mysql'
});

let User = sequelize.define('user', {
    userId: Sequelize.STRING,
    timezone: Sequelize.DOUBLE
});

export default class DataHelper {

    static async sync() {
        await sequelize.sync();
    }

}