//Complete the solution so that it reverses the string passed into it.
// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')
function solution(str) {
    let strReverse = ``;
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse; 
  }

console.log(solution(`world`));
console.log(solution(`hello`));

// Test Passed: Value == 'dlrow'
// Test Passed: Value == 'olleh'
// Test Passed: Value == ''
// Test Passed: Value == 'h'