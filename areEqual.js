object = require('./isReverse');

function main()
{
    firstBatch = [1, 2, 3, 4], secondBatch = [1, 2, 3, 4];
    console.log("Two lists are equal : " + object.isEqual(firstBatch, secondBatch));
    console.log("Two lists are equal : " + object.isEqual(secondBatch, firstBatch));
}