function repeatElement(element, repeatCount)
{
    let repeatedElements = [];
    for(let loopTurn = 0; loopTurn < repeatCount; loopTurn++)
    {
        repeatedElements.push(element);
    }
    return repeatedElements;
}

function main()
{
    let element = 'a';
    console.log("Element " + element + " after repeating is " + repeatElement(element, 6));
}