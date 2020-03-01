function isEqual(firstBatch, secondBatch)
{
    if(firstBatch.length != secondBatch.length)
        return false;
    return firstBatch.every(function(element, index)
        {   return element == this[index];
        }, secondBatch);
}

function computeReverse(elements)
{
    return elements.map(function(element, index, elements)
        {   return  elements[elements.length - index - 1];
        });
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
};