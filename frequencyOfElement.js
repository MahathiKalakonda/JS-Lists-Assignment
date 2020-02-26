function computeElementFrequency(elements, element)
{
    let elementFrequency = 0;
    for(let index = 0; index < elements.length; index++)
    {
        if(element == elements[index])
            elementFrequency ++;
    }
    return elementFrequency;
}

function main()
{
    console.log("Frequency of element is : " + computeElementFrequency([1,2,3,1,2,1,3,],1));
}