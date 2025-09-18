import Node from "./classNode.js";
import LinkedList from "./classLinkedList.js";

class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 0;
        this.buckets = [];

        for(let i = 0; i < 16; i++){this.buckets.push (new LinkedList())};
    }

    getBucket(){
        //temporary function
        return this.buckets[3];
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
        console.log(`Writing {${key}:${value}} to bucket ${bucketIndex}`)
        this.buckets[bucketIndex].append(value);
    }


};

export default HashMap;
