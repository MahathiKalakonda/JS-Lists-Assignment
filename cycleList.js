function computeListCycle(elements, resultLength)
{
    let listCycle = [];
    for(let index = 0; index < resultLength; index++)
    {
        listCycle.push(elements[index % elements.length]);
    }
    return listCycle;
}

function main()
{
    var elements = [1, 2, 3, 4];
    console.log("Cycle of elements is : "  + computeListCycle(elements, 9));
}