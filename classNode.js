class Node {
    constructor(data = null, nextNode = null){
        this.data = data;
        this.nextNode = nextNode;
    }

    getNode(){
        return {
            "data": this.data,
            "nextNode": this.nextNode,
        };
    }
};

export default Node;
