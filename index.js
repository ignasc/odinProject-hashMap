import HashMap from "./classHashMap.js";

let hashMap = new HashMap();

hashMap.set('apple', 'red')
hashMap.set('banana', 'yellow')
hashMap.set('carrot', 'orange')
hashMap.set('dog', 'brown')
hashMap.set('elephant', 'gray')
hashMap.set('frog', 'green')
hashMap.set('grape', 'purple')
hashMap.set('hat', 'black')
hashMap.set('ice cream', 'white')
hashMap.set('jacket', 'blue')
hashMap.set('kite', 'pink')
hashMap.set('lion', 'golden')

console.log("\nList all entries in the hash table:")
console.log(hashMap.entries())
console.log(`\nThe length of the hashmap is ${hashMap.length()}`)

console.log(`\nChecking if "hat" exists: ${hashMap.has("hat")}`)
console.log(`Checking if "space" exists: ${hashMap.has("space")}`)
console.log(`Checking if "dog" exists: ${hashMap.has("dog")}`)

console.log(`\nTrying to retrieve data for "apple": ${hashMap.get("apple")}`)
console.log(`Trying to retrieve data for "space": ${hashMap.get("space")}`)

//console.log(`Try to remove "banana" key: ${hashMap.remove("banana")}`)
//console.log("\nList all entries in the hash table:")
//console.log(hashMap.entries())

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

console.log("Test hash table expansion when load exceeded")
hashMap.set('moon', 'silver')
