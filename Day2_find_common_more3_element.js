// find all the element appear more then 3 times
const findElement=(arr)=>{
    const len=arr.length;
    let newArr=[];
    for (let i = 0; i < len; i++) {
        let counter=0;
        for (let j = 0; j < len ; j++) {
            if(arr[i]===arr[j]){
                counter++;

            }
        }
        if(counter>3){
            newArr.push(arr[i])
        }
    }
    return [...new Set([...newArr])];
}

console.log(findElement([1,2,1,4,4,4,5,5,5,5,5,1,2,4,2,1,2,6,4,5]))
