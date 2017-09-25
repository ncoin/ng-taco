import { TacoUtcDateTimePipe } from '../../src/pipe/utc-date-time.pipe';

describe('TacoUtcPipe', () => {
    let pipe: TacoUtcDateTimePipe;

    beforeEach(() => {
        pipe = new TacoUtcDateTimePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('check full date ', () => {
        const testDate = new Date(2017, 10, 21, 12, 23, 32, 0);

        expect(pipe.transform(testDate)).toBe('2017-11-21 03:23 AM');
        expect(pipe.transform(testDate, 'ja')).toBe('2017年11月21日 03:23 午前');
        expect(pipe.transform(testDate, 'ru')).toBe('21. 11. 2017 03:23 ночи');
    });

    it('check undefined locale ', () => {
        const testDate = new Date(2017, 10, 21, 12, 23, 32, 0);

        expect(() => pipe.transform(testDate, 'tt')).toThrowError(TypeError, `Cannot read property 'full' of undefined`);
    });

    it('check undefined display ', () => {
        const testDate = new Date(2017, 10, 21, 12, 23, 32, 0);

        expect(pipe.transform(testDate, 'en', 'sall')).toBe('2017-11-21 03:23 AM');
    });

});
