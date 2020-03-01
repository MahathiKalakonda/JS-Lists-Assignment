function isSubset(superSet, subset)
{
    let elements = superSet;
    return subset.every(function(element)
    {   let indexInSuperSet = elements.indexOf(element);
        delete elements[indexInSuperSet];
        return indexInSuperSet != -1;
    },elements);
}

function main()
{
    let superSet = [1, 2, 3, 4], subSet = [1, 2, 2];
    console.log(isSubset(superSet, subSet));
}