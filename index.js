// Code your solution in this file!
// Function to calculate the number of blocks from HQ
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}

// Function to calculate the distance from HQ in feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate the fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// Testing the functions
console.log(distanceFromHqInBlocks(50)); // 8
console.log(distanceFromHqInFeet(50)); // 2112
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 32)); // 0.04
console.log(calculatesFarePrice(50, 58)); // 25
console.log(calculatesFarePrice(34, 60)); // 'cannot travel that far'
