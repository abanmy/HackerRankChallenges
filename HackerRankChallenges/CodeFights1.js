// find first Duplicate
function firstDuplicate(a) {
    for(var i = 1 ; i<a.length ; i++){
    
        if(a.indexOf(a[i]) < i)return a[i];
    }
    return -1;
    
}

// other solution
function firstDuplicate1(a) {
    let counter =0;
    for(var i of a){
    
        if(a.indexOf(i) < counter)return i;

        counter++;
    }
    return -1;
    
}


function First(a){
    var test   = [],
        lowest = undefined;

    for (var i=0; i<a.length; i++) {
        if (test.indexOf(a[i]) > -1) {
            lowest = lowest || i;
            if (i < lowest) {
                lowest = i;
            }
        }
        else {
            test.push(a[i]);
        }
    }

    return lowest ? a[lowest] : -1;
}

function First2(a){
    var low = undefined,
        last = -1;

    for (var i=0; i<a.length; i++) {
        last = a.lastIndexOf(a[i])
        if (last > i && (low === undefined || last < low)) {
            low = last;
        }
    }

    return low !== undefined ? a[low] : -1;
}

function First3(a){
    for (let i of a) {
        
        let posi = Math.abs(i) - 1
        if (a[posi] < 0) return posi + 1
        a[posi] = a[posi] * -1
      }
    
      return -1
}


function First4(a){
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}
let a=[1, 2, 2, 2, 1];

console.log(firstDuplicate1(a));