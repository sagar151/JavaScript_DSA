// approach1
const reverseArray=(arr)=>{
    let newArr=[];
    for (let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray([1,2,44,5667,675]))
// approach1 in-built feature
const reverseArrayRev=(arr)=>{
   return arr.reverse()
}
console.log(reverseArrayRev([1,2,44,5667,675]))


