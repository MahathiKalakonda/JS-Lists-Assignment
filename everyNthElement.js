function getEveryNthElement(elements, incrementor)
{
    return elements.filter(function(element, index)
        {   return index % incrementor == 0;
        });
}

function main()
{
    let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9], incrementor = 3;
    console.log(getEveryNthElement(elements, incrementor));
}