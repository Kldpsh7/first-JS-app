console.log('Hello World!')
/*
const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newArr=arr.map(fruit=>{
    if (fruit==' '){
        return 'empty string';
    }
    else{
        return fruit
    }
})
console.log(newArr)

const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}

const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj1, key1: 1000}



console.log(obj3)

console.log(obj4)

const obj5 = {'key1': 1, "key2": 2, "key3": 1000}

const { key1, key3} = { ...obj5}



console.log(key1, key3)
*/
async function printABC(){
    console.log('a');
    console.log('b');
    await new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log('c')
            resolve()
        }, 3000)
    });
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('d')
            resolve()
        }, 0)
    });
    console.log('e');
}
printABC()