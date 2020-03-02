function difference(mainElements, removableElements)
{
    let elements = removableElements;
    return differenceElements = mainElements.filter(function(element)
                       {   indexInRemovable = elements.indexOf(element);
                           delete elements[indexInRemovable];
                           if(indexInRemovable == -1)
                               return element;
                       });
}

function main()
{
    console.log("Elements after  difference : " + difference([1, 2, 3, 4, 2], [1, 2, 3]));
}

module.exports =
{
    difference
};