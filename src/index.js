// @flow
import express from 'express';
import BotHelper from './BotHelper';

let app = express();
app.use('/webhook', BotHelper.bot().middleware());
app.get('/', (request: any, response: any) => {
    response.send("A bot lives here...");
});
app.listen(3000);

console.log("Listening...");