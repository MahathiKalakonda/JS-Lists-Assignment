function computeButFirst(elements)
{
    let elementsButFirst = elements
    elementsButFirst.shift();
    return elementsButFirst;
}

function main()
{
    let elements = [1, 2, 3, 4];
    console.log("The list : " + elements + " after removing first element is : " + computeButFirst(elements));
}