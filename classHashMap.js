import Node from "./classNode.js";
import LinkedList from "./classLinkedList.js";

class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 0;
        this.buckets = [];

        this.bucketSize = 16;

        for(let i = 0; i < this.bucketSize; i++){this.buckets.push (new LinkedList())};
    }

    checkHashLoad(){
        let currentLoad = this.length();
        let aboveThreshold = false;
        if(currentLoad > this.buckets.length * this.loadFactor){
            aboveThreshold = true;
        };
        if(aboveThreshold){
            this.expandHashTable();
        };
    }

    expandHashTable(){
        let allEntries = this.entries();
        this.bucketSize *= 2;
        this.buckets.length = 0;

        for(let i = 0; i < this.bucketSize; i++){this.buckets.push (new LinkedList())};

        for(let i = 0; i < allEntries.length; i++){
            const dataNode = allEntries[i];

            this.set(dataNode[0], dataNode[1])
        };
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
            //console.log(`Existing data found for ${key}, removing...`)
            this.buckets[bucketIndex].removeAt(position);
        }

        this.buckets[bucketIndex].append({
            [key] : value,
        });

        this.checkHashLoad();
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

    remove(key){
        const bucketIndex = this.hash(key);

        const position = this.buckets[bucketIndex].find(key);

        if(position){
            this.buckets[bucketIndex].removeAt(position);
            return true;
        };
        return false;
    }

    length(){
        let totalLength = 0;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            totalLength += bucket.size();
        }
        return totalLength;
    }

    clear(){
        this.buckets = [];
        for(let i = 0; i < 16; i++){this.buckets.push (new LinkedList())};
    };

    keys(){
        let keyArray = [];
        let bucketKeys;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];

            bucketKeys = bucket.keys();
            keyArray = [...keyArray, ...bucketKeys];
        }
        return keyArray;
    }

    values(){
        let valueArray = [];
        let bucketValues;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];

            bucketValues = bucket.values();
            valueArray = [...valueArray, ...bucketValues];
        }
        return valueArray;
    }

    entries(){
        let entryArray = [];
        let bucketEntries;

        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];

            bucketEntries = bucket.entries();
            entryArray = [...entryArray, ...bucketEntries];
        }
        return entryArray;
    }
};

export default HashMap;
