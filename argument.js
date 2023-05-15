function sum(){
    let totalSum = 0;
    for(const number of arguments){
        totalSum += number;
    }
    
    return totalSum;
}
console.log(sum(5,6,7,2,6,4))
