const rotateArray = (arr,n) => {
    let last=arr[n-1],i;
    for (i = n-1; i > 0 ; i--) {
       arr[i]=arr[i-1];
    }
    arr[0]=last;
    return arr
}
console.log(rotateArray([1, 2, 3, 4, 5],5))

