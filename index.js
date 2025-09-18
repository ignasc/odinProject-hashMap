import HashMap from "./classHashMap.js";

let hashMap = new HashMap();

hashMap.set("Rama", "Rama value")
hashMap.set("Sita", "Sita value")
hashMap.set("Mega", "Mega value")
hashMap.set("Beta", "Beta value")

console.log("Current hash map bucket:")
console.log(hashMap.getBucket())
console.log(hashMap.hash("Rama"))
console.log(hashMap.hash("Sita"))
