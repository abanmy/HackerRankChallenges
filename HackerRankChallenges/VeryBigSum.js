// Big Sum challenge
function aVeryBigSum(ar) {
    let bigSum = 0;
    for (let index = 0; index < ar.length; index++) {
        bigSum += ar[index];
    }
    return bigSum

}

// Plus Minus challenge
function plusMinus(arr) {
    let plusCounter=0;
    let minusCounter=0;
    let zeroCounter=0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 0) zeroCounter++;
        if (arr[index] > 0) plusCounter++;
        if (arr[index] < 0) minusCounter++;
    }
    console.log(plusCounter/arr.length);
    console.log(minusCounter/arr.length);
    console.log(zeroCounter/arr.length);

}

// Mini-Max Sum challenge
function miniMaxSum(arr) {
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    let counter=0;
    for (let index = 0; index < arr.length; index++) {
        counter+=arr[index];
    }
    let mins=counter-max;
    let maxs=counter-min;
    console.log(mins + " "+ maxs);
    
}

let array=[1,2,4,5];
miniMaxSum(array);