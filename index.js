import HashMap from "./classHashMap.js";

let hashMap = new HashMap();

hashMap.set("Rama", "Rama value")
hashMap.set("Sita", "Sita value")
hashMap.set("Sita", "Sita value updated")
hashMap.set("Mega", "Mega value")
hashMap.set("Beta", "Beta value")

console.log("Current hash map bucket:")
console.log(hashMap.getDebug())
console.log(hashMap.hash("Rama"))
console.log(hashMap.hash("Sita"))

console.log(`\nChecking if "Rama" exists: ${hashMap.has("Rama")}`)
console.log(`Checking if "Gama" exists: ${hashMap.has("Gama")}`)
console.log(`Checking if "Beta" exists: ${hashMap.has("Beta")}`)

console.log(`\nTrying to retrieve data for "Rama": ${hashMap.get("Rama")}`)
console.log(`Trying to retrieve data for "Gama": ${hashMap.get("Gama")}`)

console.log(`Try to remove "Sita" key: ${hashMap.remove("Sita")}`)
console.log("Current hash map bucket:")
console.log(hashMap.getDebug())

console.log(`\nThe length of the hashmap is ${hashMap.length()}`)
//console.log("Clearing the hash table")
//hashMap.clear()
//console.log(`The length of the hashmap is ${hashMap.length()}`)

console.log("\nList all keys in the hash table:")
console.log(hashMap.keys())

console.log("\nList all values in the hash table:")
console.log(hashMap.values())

console.log("\nList all entries in the hash table:")
console.log(hashMap.entries())
