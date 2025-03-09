// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};
//doubler
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(4));
//tripler
const fareTripler = createFareMultiplier(3);
console.log(fareTripler(4));

//declaring the function and the parameters
const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//selecting either the first two drivers or last two drivers
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];