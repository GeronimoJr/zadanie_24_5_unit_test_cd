const calculateStylePoints = (styleNotes) => {
    
    const max = Math.max(...styleNotes);
    const min = Math.min(...styleNotes);

    const numberOfMax = styleNotes.filter(x => x == max).length;
    const numberOfMin = styleNotes.filter(x => x == min).length;

    const threeNotes = styleNotes.filter((x) => {
        return x !== max && x !== min;
    });

    const score = threeNotes.reduce((a, b) => a + b, 0);

    
    return score + max * (numberOfMax - 1) + min * (numberOfMin - 1);

};

module.exports = calculateStylePoints;