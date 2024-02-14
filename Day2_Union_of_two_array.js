const twoUnion = (a,b) => {
   const len_a=a.length
    const len__b=b.length
    let counter=0;
    for(let i=0;i<len_a;i++){
        for (let j=0;j<len__b;j++){
           if(a[i]===b[j]){
               counter++;
           }
        }
    }
    return (len_a+len__b)-counter;
    // return [...new Set([...a,...b])].length // in-built feature 2nd approach
}
console.log(twoUnion([85, 25 ,1, 32 ,54 ,6],[85, 2]))
