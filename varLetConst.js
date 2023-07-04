// Var
var a = 1;
console.log(`${a}`);
{
    var a = 2;
    console.log(`${a}`);
}
console.log(`${a}`);

// Let (Not Redeclare but value can be Reassign)
let b = 1;
b = 2;
console.log(`${b}`);
{
    let b = 2;
    console.log(`${b}`);
}
console.log(`${b}`);

// Const (Not Redeclare, Not Reassign)

const c = 1;
// c = 2; ===> X
console.log(`${c}`);
{
    const c = "Hello";
    console.log(`${c}`);
}
console.log(`${c}`);