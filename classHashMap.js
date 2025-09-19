import Node from "./classNode.js";
import LinkedList from "./classLinkedList.js";

class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 0;
        this.buckets = [];

        for(let i = 0; i < 16; i++){this.buckets.push (new LinkedList())};
    }

    getDebug(){
        //temporary function
        console.log("Check for value")
        console.log(this.buckets[3].contains("Sita"))
        return this.buckets[3].toString();
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode %= 16;
        }

        return hashCode;
    }

    set(key, value){
        const bucketIndex = this.hash(key);
        //console.log(`Writing {${key}:${value}} to bucket ${bucketIndex}`)

        const position = this.buckets[bucketIndex].find(key);

        if(position){
            console.log(`Existing data found for ${key}, removing...`)
            this.buckets[bucketIndex].removeAt(position);
        }

        this.buckets[bucketIndex].append({
            [key] : value,
        });
    }

    has(key){
        const bucketIndex = this.hash(key);

        return this.buckets[bucketIndex].contains(key);
    }

    get(key){
        const bucketIndex = this.hash(key);

        const position = this.buckets[bucketIndex].find(key);

        if(position){
            return this.buckets[bucketIndex].at(position)[key];
        };

        return null;
    }
};

export default HashMap;
