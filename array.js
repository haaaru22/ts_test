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
// function getItem () {};

//アロー関数
const getItem = () => {};

fruits.forEach(input => console.log(input));

//Array.filter
const scores = [10,20,30,40];
const newScores = scores.filter((value) => value >= 30);
console.log(newScores);

//Array.find
const members = ['honda', 'kagawa', 'sasaki'];
const member = members.find((e) => e === 'kagawa');
console.log(member);

//Array.map
const userList = [10,20,30,40];
const userIdList = userList.map(e => `user_${e}`);
console.table(userIdList);
