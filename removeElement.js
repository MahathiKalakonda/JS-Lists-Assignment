function removeElement(element)
{
    return element != this;
}

function removeElementOccurrences(elements, element)
{
    let filteredElements = elements.filter(removeElement, element);
    return filteredElements;
}

function main()
{
    console.log("Elements after removal : " + removeElementOccurrences([1,2,3,4,1,2,1],1));
    console.log("Elements after removal : " + removeElementOccurrences([1,2,3,4,1,2,1],2));
    console.log("Elements after removal : " + removeElementOccurrences([1,2,3,4,1,2,1],5));
}