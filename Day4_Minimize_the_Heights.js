const FindMinHeight = (arr,k) => {
    arr.sort((a, b) => a - b);
    let n=arr.length;
    let ans = arr[n - 1] - arr[0];

    let tempmin = arr[0];
    let tempmax = arr[n - 1];

    for (let i = 1; i < n; i++) {
        if (arr[i] - k < 0) {
            continue;
        }
        tempmin = Math.min(arr[0] + k, arr[i] - k);
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        ans = Math.min(ans, tempmax - tempmin);
    }
    return ans;
}
console.log(FindMinHeight([3, 9, 12, 16, 20],5))
