function isEqual(firstBatch, secondBatch)
{
    if(firstBatch.length != secondBatch.length)
        return false;
    for(let index = 0; index < secondBatch.length; index++)
    {
        if(firstBatch[index] != secondBatch[index])
            return false;
    }
    return true;
}

function isReverse(firstBatch, secondBatch)
{
    return isEqual(firstBatch, secondBatch.reverse());
}

function main()
{
    let firstBatch = [1, 2, 3, 4], secondBatch = [4, 3, 2, 1];
    console.log("First list is reverse of second list : " + isReverse(firstBatch, secondBatch));
}