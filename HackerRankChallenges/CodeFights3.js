// Rotate image 90'
//You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
function rotateImage1(a) {
    Array.prototype.rotateRight = function( a ) {
        this.unshift.apply( this, this.splice( a, this.length ) )
        return this;
}
}

var a= [[1,2,3], 
        [4,5,6], 
        [7,8,9]];
        
//console.log(a);
//console.log(rotateImage2(a));
var b = [[0,0,0], 
        [0,0,0], 
        [0,0,0]];;
console.log(b);
rotateImage2(a)

function rotateImage2(a){
    var l=a.length;
        // b=a.slice(0);
        
    for (let i = 0 ; i <a.length ; i++){
        for (let j = 0 ; j<a.length ; j++){
            b[l-i-1][j] = a[j][i];
            console.log("l-i-1:"+(l-i-1)+" , j:"+j)
            console.log(b);
        }

    }
    console.log(a);
    console.log(b);
}