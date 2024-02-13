const moveNegativeToEnd=(arr)=>{
    let n=arr.length;
   let newArr=new Array(n);
   let counter=0
   for(let i=0;i<n;i++){
       if(arr[i]>=0){
           newArr[counter++]=arr[i]
       }
   }
   if (counter===n || counter===0){
       return arr;
   }
    for(let i=0;i<n;i++){
        if(arr[i]<0){
            newArr[counter++]=arr[i]
        }
    }
    for(let i=0;i<n;i++){
      arr[i]=newArr[i]
    }

   return arr;
}
console.log(moveNegativeToEnd([1, 1, 3, 2, 7, 5, 11, 6 ]))
