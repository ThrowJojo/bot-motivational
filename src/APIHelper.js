// @flow
import fetch from 'node-fetch';
import Config from './config.json';

export default class APIHelper {

    static async getUserData(userId: string): any {
        let response = await fetch(`https://graph.facebook.com/v2.6/${userId}?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=${Config.page_token}`);
        return await response.json();
    }

}