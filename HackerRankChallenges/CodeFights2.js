// //Note: Write a solution that only iterates over the string once and uses O(1) additional memory,
//  since this is what you would be asked to do during a real interview.
// Given a string s, find and return 
// the first instance of a non-repeating character in it.
//  If there is no such character, return '_'.
function firstNotRepeatingCharacter(s) {
    let c='';
    for (let i = 0; i < s.length; i++) {
        c=s.charAt(i);
        if (s.indexOf(c)==i && s.indexOf(c,i+1) ==-1)return c;
    }
    return ;
}
let s="abcabd";
console.log(firstNotRepeatingCharacter(s));

