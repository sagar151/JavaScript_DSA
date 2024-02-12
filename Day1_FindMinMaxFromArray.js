const findMinMax=(arr)=>{
    const len=arr.length;
    let max=arr[0], min=arr[0];
    for(let i=1;i<len;i++){
        if(min<arr[i]){
            min=arr[i]
        }
        if(max>arr[i]){
            max=arr[i]
        }
    }
    console.log('min',min)
    console.log('max',max)
}
findMinMax([2,5,66,765,22])
