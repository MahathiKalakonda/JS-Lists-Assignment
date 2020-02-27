function rotateElement(element, index, elements)
{
    let newIndex = (index + this) % elements.length;
    return elements[newIndex];
}

function rotateLeft(elements, rotateCount)
{
    let rotatedElements = elements.map(rotateElement, rotateCount);
    return rotatedElements;
}

function main()
{
    console.log("Elements after rotating are : " + rotateLeft([1, 2, 3, 4, 5], 2));
}

module.exports ={
rotateLeft
};