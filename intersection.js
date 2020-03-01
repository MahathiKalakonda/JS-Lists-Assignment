function intersection(firstBatch, secondBatch)
{
    let elements = secondBatch;
    return firstBatch.filter(function(element)
            {   indexInSecond = elements.indexOf(element);
                delete elements[indexInSecond];
                if(indexInSecond != -1)
                    return element;
            });
}

function main()
{
    let firstBatch = [1, 2, 3, 4], secondBatch = [1, 2, 2, 5];
    console.log("Intersection is : " + intersection(firstBatch, secondBatch));
}