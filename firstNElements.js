function getFirstNElements(elements, n)
{
    return elements.splice(0, n);
}

function main()
{
    let number = 4, elements = [23, 12, 9, 13, 29, 91, 32];
    console.log("First " + number + " elements are : " + getFirstNElements(elements, number));
}

main();