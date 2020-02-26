function dropFirstNElements(elements, dropCount)
{
    let elementsButFirstN = elements;
    for(let loopTurn = 0; loopTurn < dropCount; loopTurn++)
    {
        elementsButFirstN.shift();
    }
    return elementsButFirstN;
}

function main()
{
    let elements = [1, 3, 9, 10, 11, 8], dropCount = 3;
    console.log("Elements after dropping " + dropCount + " elements is " + dropFirstNElements(elements, dropCount));
}

main();