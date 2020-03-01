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
    let mainElements = [1, 2, 3, 4, 2], removableElements = [1, 2, 3];
    console.log("Elements after  difference : " + difference(mainElements, removableElements));
}

module.exports =
{
    difference
};