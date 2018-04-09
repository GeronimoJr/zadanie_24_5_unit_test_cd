const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('General test, hillSize:', () => {
    describe('normal', () => {
        it('should return score Stefan HULA from SAT 10 FEB 2018', () => {
            
            const notes = [19.0, 19.5, 19.0, 19.0, 19.0]

            const actual = calculateTotalPoints(111, 'normal', 98, notes, 3.2, -14.4);
    
            const expected = '131.8';
    
            assert.equal(actual, expected);
        });
    });

    describe('large', () => {
        it('should return score Kamil STOCH from SUN 18 JAN 2015', () => {
            
            const notes = [19.0, 20.0, 19.5, 19.0, 18.5]

            const actual = calculateTotalPoints(134, 'large', 120, notes, 0, -5.4);
    
            const expected = '137.3';
    
            assert.equal(actual, expected);
        });
    });

    describe('skiFlying', () => {
        it('should return score Severin FREUND from THU 17 MAR 2016', () => {
            
            const notes = [18.0, 18.5, 17.5, 18.5, 18.5]

            const actual = calculateTotalPoints(227.5, 'skiFlying', 200, notes, 8.7, -8.4);
    
            const expected = '208.3';
    
            assert.equal(actual, expected);
        });
    });
});