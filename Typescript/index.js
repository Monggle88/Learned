var userName = 'kim';
var userAge = 20;
var userStatus = true;
var job = null;
var inventory = ['walet', 'keys'];
var mike = { name: 'mike', age: 21 };
var jake = { name: 'mike' };
var friends = [mike, jake];
function sumNums(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sumNums([1, 2, 3, 4, 5]));
var drinks = {
    coke: 1300,
    sprite: 1200,
    cokeZero: 1300,
    spriteZero: 1200
};
