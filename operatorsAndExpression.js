// Arithmetic Operators
let a = 7;
let b = 3;
let c = 30;
let d = 2;

console.log(`(a + b) = ${a + b}`);
console.log(`(a - b) = ${a - b}`);
console.log(`(a / b) = ${a / b}`);
console.log(`(a * b) = ${a * b}`);
console.log(`(a ** b) = ${a ** b}`);
// It will show remain value
console.log(`(a % b) = ${a % b}`);

console.log(`(a ++) = ${a++}`);
console.log(`now a = ${a}`);

console.log(`(b --) = ${b--}`);
console.log(`now b = ${b}`);

console.log(`(++ c) = ${++c}`);
console.log(`now c = ${c}`);

console.log(`(-- b) = ${--b}`);
console.log(`now d = ${d}`);

// Assignments Operators
// ================

let assignments = 2;
console.log(`${assignments += 5}`);
console.log(`${assignments -= 5}`);
console.log(`${assignments *= 5}`);
console.log(`${assignments /= 5}`);
console.log(`${assignments %= 5}`);
console.log(`${assignments **= 5}`);

// Conparesion Operators

let comp1 = 3;
let comp2 = 2;

console.log(`comp1 == comp2 => ${comp1 == comp2}`);
console.log(`comp1 != !comp2 => ${comp1 != comp2}`);
// check data type
console.log(`comp1 === comp2 => ${comp1 === comp2}`);
console.log(`comp1 !== !comp2 => ${comp1 !== comp2}`);

console.log(`comp1 > comp2 => ${comp1 > comp2}`);
console.log(`comp1 < !comp2 => ${comp1 < comp2}`);
console.log(`comp1 >= comp2 => ${comp1 >= comp2}`);
console.log(`comp1 <= !comp2 => ${comp1 <= comp2}`);

// Logical Operators
// ============
let x = 2;
let y = 3;
// Both condition should be true
console.log(x != y && x < y);
// One condition should be true
console.log(x != y || x > y);
// Change the bollean
console.log(!false);
console.log(!true);
