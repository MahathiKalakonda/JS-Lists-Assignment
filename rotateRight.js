object = require('./rotateLeft')

function rotateRight(elements, rotateCount)
{
    return object.rotateLeft(elements, elements.length - rotateCount);
}

function main()
{
    console.log("Elements after rotating are : " + rotateRight([1, 2, 3, 4, 5], 1));
}

main();