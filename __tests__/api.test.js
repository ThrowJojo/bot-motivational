// @flow

import APIHelper from '../src/APIHelper';
import DataHelper from '../src/DataHelper';
import Functions from '../src/Functions';
import Config from '../src/config.json';

test('Read config data', () => {
    expect(Config.verify_token).toBe('verify_token');
});

test('Get data for dummy user', async() => {
    let userData = await APIHelper.getUserData(Config.dummy_user);
    expect(userData.first_name).toBe('Jordan');
    console.log(userData);
});

test('Get data for a fake ID', async() => {
    let userData = await APIHelper.getUserData("232343434343");
    expect(userData.hasOwnProperty('error')).toBeTruthy();
});

test('Sync Sequelize', async() => {
    let { error } = await DataHelper.sync();
    expect(error).toBe(null);
});

test('Remove user from Database', async() => {
    let { error } = await DataHelper.removeUser(Config.dummy_user);
    console.log(error);
});

test('Add User To Database', async() => {
    let userData = await APIHelper.getUserData(Config.dummy_user);
    let {user, error} = await DataHelper.addUser(Config.dummy_user, userData.timezone);
    expect(error).toBe(null);
    expect(user.timezone).toBe(userData.timezone);
});

/* TODO: Create proper test
test('Get date for GMT offset', () => {
    let date = Functions.calculateTime(-2.5);
    console.log(date.getHours());
    console.log(date.getMinutes());
});
*/