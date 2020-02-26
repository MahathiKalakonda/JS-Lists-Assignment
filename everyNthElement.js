function getEveryNthElement(elements, incrementor)
{
    let nthElements = []
    for(let index = 0; index < elements.length; index += incrementor)
    {
        nthElements.push(elements[index]);
    }
    return nthElements;
}

function main()
{
    let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9], incrementor = 3;
    console.log(getEveryNthElement(elements, incrementor));
}