function computeElementFrequency(elements, element)
{
    return elements.reduce(function(frequency, currentValue)
            {   return currentValue == element ? ++frequency : frequency;
            }, 0);
}

function main()
{
    console.log("Frequency of element is : " + computeElementFrequency([1,2,3,1,2,1,3,],1));
}