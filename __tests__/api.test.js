// @flow

import APIHelper from '../src/APIHelper';
import data from '../src/config.json';

test('A simple test', () => {
    expect(data.verify_token).toBe('verify_token');
});