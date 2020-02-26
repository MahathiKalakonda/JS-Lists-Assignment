function computeRangeElements(start, end, incrementor = 1)
{
    let elements = [];
    for(let element = start; element < end + 1; element += incrementor)
        elements.push(element);
    return elements;
}

function getElementsInRange(start, end, incrementor = 1)
{
    if(incrementor < 0)
        var elements = computeRangeElements(end, start, Math.abs(incrementor)).reverse();
    else
        var elements = computeRangeElements(start, end, incrementor);
    if(end == elements[elements.length - 1])
        elements.pop();
    return elements;
}

function main()
{
    console.log("Elements are : " + getElementsInRange(5, 0, -1));
    console.log("Elements are : " + getElementsInRange(1,10,2));
}