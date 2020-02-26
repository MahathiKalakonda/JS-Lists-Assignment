function computeUnion(accumulator, list)
{
    return accumulator.concat(list);
}

function main()
{
    let firstBatch = [18, 20, 12, 13], secondBatch = [1, 19, 25, 32];
    console.log("Union of people in batch 1 and batch 2 are " + computeUnion(firstBatch, secondBatch));
}