// @flow
import FBBotFramework from 'fb-bot-framework';
import Constants from './Constants';
import Config from './config.json';

let botInstance: FBBotFramework = new FBBotFramework({
    page_token: Config.page_token,
    verify_token: Config.verify_token
});

botInstance.setGetStartedButton(Constants.PAYLOAD_GET_STARTED);

botInstance.on('postback', (userId: string, payload: string) => {

    if (payload == Constants.PAYLOAD_GET_STARTED) {
        BotHelper.handleGetStarted(userId);
    } else if (payload == Constants.PAYLOAD_SUBSCRIBE) {

    }

});

botInstance.on('message', (userId: string, message: string) => {
    BotHelper.handleMessage(userId, message);
});

export default class BotHelper {

    static bot() {
        return botInstance;
    }

    static handleMessage(userId: string, message: string) {
        botInstance.sendTextMessage(userId, "Right back at you");
    }

    static handleGetStarted(userId: string) {
        let message = "I can send a motivatonal message every morning, how does that sound?";
        let buttons = [
            {
                type: 'postback',
                title: 'Subscribe',
                payload: Constants.PAYLOAD_SUBSCRIBE
            }
        ];
        botInstance.sendButtonMessage(userId, message, buttons);
    }

}