// Kadane's Algorithm
const max_subArray=(arr)=>{
    let max_current=arr[0], max_global=arr[0];
    for (let i = 1; i < arr.length; i++) {
        max_current=Math.max(arr[i],max_current+arr[i]);
        if(max_current>max_global){
            max_global=max_current
        }
    }
    return max_global;
}
console.log(max_subArray([1,2,3,-2,5]))
