let a = [1,2,3,5]
function sorted(arr, n) {
    let c = n - 1;
    return arr.sort((a, b) => b - a)[c];
}
console.log(sorted(a,1));