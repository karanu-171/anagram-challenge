let anagram = function(str1, str2) {
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase();
    return (sorted1 === sorted2);
}


console.log(anagram('hello', 'jello'));
console.log(anagram('hello', 'loelh'));