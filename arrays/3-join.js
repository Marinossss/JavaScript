const arr = [1, 2, 3]
console.log(arr.join(", "))

console.log(arr)

let out = ""
for (const item of arr) {
  out += item + ", "
}
console.log(out)