function isSubset(superSet, subset)
{
    for(let index = 0; index < subset.length; index++)
    {
        let indexInSuperSet = superSet.indexOf(subset[index]);
        if(indexInSuperSet == -1)
            return false;
        superSet.splice(indexInSuperSet,1);
    }
    return true;
}

function main()
{
    let superSet = [1, 2, 3, 4], subSet = [1, 2, 2];
    console.log(isSubset(superSet, subSet));
}