// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
// could take two routes: either do by comparing slopes, or by using the line equation ax + bx + c = 0

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
    let possible = true;
    let slopes = [];

    if (coordinates.length <= 2) return true;

    for (let i=1; i<coordinates.length; i++) {
        let [x1, y1] = coordinates[i-1];
        let [x2, y2] = coordinates[i];
        let slope = (y2 === 0 || x2 === 0) ? Math.abs((y2-y1) / (x2-x1)) : (y2-y1) / (x2-x1);
        slopes.push(slope);
    }

    console.log('slopes:', slopes);
    for (let i=1; i<slopes.length; i++) {
        if (slopes[i] !== slopes[i-1]) possible = false;
    }

    return possible;
};

// console.log(checkStraightLine([[0,0],[0,5],[5,5],[5,0]]));
// console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));
console.log(checkStraightLine([[1,-8],[2,-3],[1,2]]));
console.log(checkStraightLine([[-10,84],[0,-6],[7,-69],[-7,57],[3,-33],[-8,66],[-12,102],[10,-96]]));