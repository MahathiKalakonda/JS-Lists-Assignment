function computeButLast(elements)
{
    let elementsButLast = elements
    elementsButLast.pop();
    return elementsButLast;
}

function main()
{
    let elements = [1, 2, 3, 4];
    console.log("The list : " + elements + " after removing last element is : " + computeButLast(elements));
}