function rotateLeft(elements, rotateCount)
{
    rotatedElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        indexInElements = (index + rotateCount) % elements.length;
        rotatedElements.push(elements[indexInElements]);
    }
    return rotatedElements;
}

function main()
{
    console.log("Elements after rotating are : " + rotateLeft([1, 2, 3, 4, 5], 2));
}

module.exports =
{
rotateLeft
};