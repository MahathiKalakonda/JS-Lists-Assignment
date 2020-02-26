function difference(mainElements, removableElements)
{
    let differenceElements = mainElements;
    for(let index = 0; index < removableElements.length; index++)
    {
        let indexInMainElements = differenceElements.indexOf(removableElements[index]);
        if(indexInMainElements != -1)
            differenceElements.splice(indexInMainElements, 1);
    }
    return differenceElements;
}

function main()
{
    mainElements = [1, 2, 3, 4, 2], removableElements = [1, 2, 3];
    console.log("Elements after  difference : " + difference(mainElements, removableElements));
}