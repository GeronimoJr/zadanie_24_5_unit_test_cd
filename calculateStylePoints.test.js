const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('Style test, styleNotes:', () => {
    it('18.0 18.5 17.5 18.5 18.5', () => {
        const notes = [18.0, 18.5, 17.5, 18.5, 18.5]
        
        const actual = calculateStylePoints(notes);
    
        const expected = '55';
    
        assert.equal(actual, expected);
    });

    it('18.5 18.5 18.5 18.0 18.5', () => {
        const notes = [18.5, 18.5, 18.5, 18.0, 18.5]
        
        const actual = calculateStylePoints(notes);
    
        const expected = '55.5';
    
        assert.equal(actual, expected);
    });

    it('17.5 18.0 18.5 19.0 19.5', () => {
        const notes = [17.5, 18.0, 18.5, 19.0, 19.5]
        
        const actual = calculateStylePoints(notes);
    
        const expected = '55.5';
    
        assert.equal(actual, expected);
    });
});