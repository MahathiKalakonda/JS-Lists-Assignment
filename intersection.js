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
    console.log("Intersection is : " + intersection([1, 2, 3, 4], [1, 2, 2, 5]));
}
