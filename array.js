let fruits = [
    'りんご',
    'バナナ'
];

console.log(fruits);

fruits.push('みかん');
console.log(fruits);

fruits.forEach(function(input){
    console.log(input);
});

//i一般的な関数
function getItem () {};

//アロー関数
const getItem = () => {};

fruits.forEach(input => console.log(input));