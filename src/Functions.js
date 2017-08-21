// @flow

export default class Functions {

    static calculateTime(offset: number): Date {
        let date = new Date();
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000*offset));
    }

}