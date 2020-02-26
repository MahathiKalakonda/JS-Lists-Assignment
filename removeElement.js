function removeElement(elements, element)
{
    let filteredElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        if(element != elements[index])
            filteredElements.push(elements[index]);
    }
    return filteredElements;
}

function main()
{
    console.log("Elements after removal : " + removeElement([1,2,3,4,1,2,1],1));
    console.log("Elements after removal : " + removeElement([1,2,3,4,1,2,1],2));
    console.log("Elements after removal : " + removeElement([1,2,3,4,1,2,1],5));
}