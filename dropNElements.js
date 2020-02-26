function dropFirstNElements(elements, dropCount)
{
    return elements.splice(dropCount);
}

function main()
{
    let elements = [1, 3, 9, 10, 11, 8], dropCount = 3;
    console.log("Elements after dropping " + dropCount + " elements is " + dropFirstNElements(elements, dropCount));
}