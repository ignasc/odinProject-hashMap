class HashMap {
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 0;
        this.buckets = [];

        for(let i = 0; i < 16; i++){this.buckets.push ([])};
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


};

export default HashMap;
