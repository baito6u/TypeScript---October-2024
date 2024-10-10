// String
var str = "hello";
str = "Zdrasti";
str = "Hi ".concat(123 * 213, "!");
// Number
var num = 123;
num = 123.123;
num = 10001101;
num = 7e3;
// Boolean
var isBool = true;
isBool = false;
isBool = 1000 > 0;
var nums = [1, 2, 3, 4];
// Symbol
// const symb1: Symbol = Symbol("123");
// console.log(symb1);
// Null
var obj = null;
obj = 123;
// Undefined
var variable;
// Arrays
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr3 = ["a", "b", "c"];
var arr4 = [true, false, true];
// Tuple Object.entries
var tuple = ["age", 23];
// tuple = [123, 'age']
// Enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
})(DaysOfWeek || (DaysOfWeek = {}));
function tellMeIfIsMonday(day) {
    return DaysOfWeek.Monday === day;
}
// Any
var x = 5;
x = [1, 2, 3];
x = true;
x = { name: "Peshi" };
// Unknown
var y = 5;
y = [3, 4, 5];
y = false;
// Void
function printMe(msg) {
    console.log(msg);
}
// printMe("Zdraveite kolegi!");
// Return Type
function getFullName(fN, lN) {
    if (lN) {
        return "".concat(fN, " ").concat(lN);
    }
    return fN;
}
var fName = getFullName("Ivan", "Peshov");
// Return Types 2
var sum = function (a, b) {
    if (b === void 0) { b = 5000; }
    return a + b;
};
// console.log(sum(123));
// DEMO
var intCollect = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach(function (int) {
    console.log(int);
});
