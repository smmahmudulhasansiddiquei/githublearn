let number = [1,2,3,4,5,3,4,2,6,7,1,8,4,5,9];
let newNum = [];

for(let i = 0; i <= number.length; i++){
    let alreadyExists = false;

    for(let j = 0; j <= newNum.length; j++){
        if(number[i] === newNum[j]){
            alreadyExists = true;
        }
    }
    if(!alreadyExists){
    newNum.push(number[i]);
    }
}

console.log("New Array = ",newNum);