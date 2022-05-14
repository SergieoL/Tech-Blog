const {format_date} = require('../utils/helpers');

test('format_date() returns as a string', () => {
    const date = new Date('2022-05-14');

    expect(format_date(date)).toBe('5/13/2022');
})