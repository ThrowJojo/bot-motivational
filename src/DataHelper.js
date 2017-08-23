// @flow
import Sequelize from 'sequelize';
import Config from './config.json';

let sequelize: Sequelize = new Sequelize(Config.database_name, Config.database_user, Config.database_password, {
    dialect: 'mysql'
});

let User = sequelize.define('user', {
    userId: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true
    },
    timezone: Sequelize.DOUBLE,
    lastSend: Sequelize.BIGINT
});

export default class DataHelper {

    // Syncs the database
    static async sync(): Promise<{ error: any }> {
        try {
            await sequelize.sync();
            return {
                error: null
            };
        } catch (error) {
            return {
                error: error
            };
        }
    }

    // Adds user to database
    static async addUser(userId: string, timezone: number): Promise<{ user: any, error: any }> {
        try {
            let user = await User.create({
                userId: userId,
                timezone: timezone,
                lastSend: 0
            });
            return {
                user: user,
                error: null
            };
        } catch (error) {
            return {
                user: null,
                error: error
            };
        }
    }

    // TODO: Might not actually need a try block in this case
    // Removes a user, using userId
    static async removeUser(userId: string): Promise<{ error: any }> {
        try {
            await User.destroy({
                where: {
                    userId: userId
                }
            });
            return {
                error: null
            };
        } catch (error) {
            return {
                error: error
            };
        }
    }

}