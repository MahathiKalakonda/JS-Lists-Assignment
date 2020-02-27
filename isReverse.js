function areElementsEqual(element, index)
{
    return element == this[index];
}

function isEqual(firstBatch, secondBatch)
{
    if(firstBatch.length != secondBatch.length)
        return false;
    return firstBatch.every(areElementsEqual, secondBatch);
}

function computeReverse(elements)
{
    let reverseElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        reverseElements.unshift(elements[index]);
    }
    return reverseElements;
}

function isReverse(firstBatch, secondBatch)
{
    return isEqual(firstBatch, computeReverse(secondBatch));
}

function main()
{
    let firstBatch = [1, 2, 3, 4], secondBatch = [4, 3, 2, 1];
    console.log("First list is reverse of second list : " + isReverse(firstBatch, secondBatch));
    console.log("Second list is reverse of first list : " + isReverse(secondBatch, firstBatch));
}

module.exports = {
isEqual,
isReverse,
computeReverse
};