
const sum = (s1: number,s2: number): number =>{
    return s1 + s2;
}
console.log(sum(3, 5.5));


const add = (n1: number, n2: number) => {
    return n1 + n2;
}
const total = add(3,7);
console.log(total);


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
unionType = 'hello';
unionType.toUpperCase();


type ClothSize = 'small' | 'medium' | 'large' 
const cloth:{
    color: string;
    size: ClothSize
} = {
    color: 'red',
    size: 'small'
}

console.log(cloth);
