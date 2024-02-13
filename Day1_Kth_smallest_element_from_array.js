const findKthSmallest=(arr,k)=>{
    const n=arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n -i-1; j++) {
           if(arr[j]>arr[j+1]){
               let temp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp;
           }
        }
    }
    console.log('Kth smallest is ',arr[k-1])
}
findKthSmallest([44,5,66,765,22],3)
