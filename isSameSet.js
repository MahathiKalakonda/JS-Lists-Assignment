objectIsDifference = require('./difference');
objectIsReverse = require('./isReverse')

function isSameSets(firstBatch, secondBatch)
{
    let differentElements = objectIsDifference.difference(firstBatch, secondBatch);
    return objectIsReverse.isEqual(differentElements, []);
}

function main()
{
    let firstBatch = [1, 3, 2, 4], secondBatch = [1, 4, 3, 2];
    console.log(isSameSets(firstBatch, secondBatch));
}

main();