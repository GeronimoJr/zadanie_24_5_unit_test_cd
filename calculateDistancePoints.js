const calculateDistancePoints = (distance, hillSize, kPoint) => {

    const difference = distance - kPoint;
    
    switch(hillSize) {
        case 'normal':

            return 60 + difference * 2;

            brake;
        case 'large':

            return 60 + difference * 1.8;

            brake;
        case 'skiFlying':

            return 120 + difference * 1.2;

            brake;
    };
};
  
module.exports = calculateDistancePoints;