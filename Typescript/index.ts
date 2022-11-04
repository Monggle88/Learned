let userName: string = 'kim';
let userAge: number = 20;
let userStatus: boolean = true;
let job: null | string = null;
let inventory: string[] = ['walet', 'keys'];

type FriendI = { name: string; age?: number };
const mike: FriendI = { name: 'mike', age: 21 };
const jake: FriendI = { name: 'mike' };
let friends: object[] = [mike, jake];

function sumNums(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumNums([1, 2, 3, 4, 5]));

type ProductI = { [name: string]: number };
const drinks: ProductI = {
    coke: 1300,
    sprite: 1200,
    cokeZero: 1300,
    spriteZero: 1200,
};
