
const sum = (s1: number,s2: number): number =>{
    return s1 + s2;
}
console.log(sum(3, 5.5));


const add = (n1: number, n2: number): number => {
    return n1 + n2;
}
console.log(add(3, 5));


let hasValue: boolean = false;
let count: number = 3;
let float: number = 3.11;
let negative: number = -5;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;


const person = {
    name: {
        first: 'beck',
        last:'ji'
    },
    age: 20,
}

const fruits = ['Apple', 'Banana', 'Grape', 1]
const book:[string, number, boolean] = ['anime', 2000, true];
book[1] = 200;

enum CofeeSize {
    SHORT,
    TALL,
    GRANDE
}
const coffee = {
    hot: true,
    size: CofeeSize.TALL,
}


let unionType: number | string = 10;
unionType = '33'

console.log(unionType);
