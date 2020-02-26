function isDistinct(elements)
{
    let distinctElements = new Set(elements);
    distinctElements = Array.from(distinctElements);
    return elements.length == distinctElements.length;
}

function main()
{
    let elements = [1, 3, 4, 2]
    console.log("List " + elements + " is distinct : " + isDistinct(elements));
}

main();