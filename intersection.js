function intersection(firstBatch, secondBatch)
{
    let intersectingElements = [], differenceElements = firstBatch;
    for(let index = 0; index < secondBatch.length; index++)
    {
        let indexInFirstBatch = differenceElements.indexOf(secondBatch[index])
        if(indexInFirstBatch != -1)
            intersectingElements.push(differenceElements.splice(indexInFirstBatch, 1));
    }
    return intersectingElements;
}

function main()
{
    let firstBatch = [1, 2, 3, 4], secondBatch = [1, 2, 2, 5];
    console.log("Intersection is : " + intersection(firstBatch, secondBatch));
}