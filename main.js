//オブジェクト

const member = {
    name: 'yamada',
    age:22
}
console.log(member.age);


const member_2 = {
    ichikumi:{
        kagawa:{
            height:145,
            age:22
        },
        kubo:{
            height:150,
            age:19
        }
    },
    nikumi:{
        suzuki:{
            height:155,
            age:30
        },
        yosida:{
            height:166,
            age:18
        }
    }
}
console.log(member_2.ichikumi.kagawa.age);