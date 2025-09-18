import Node from "./classNode.js";

class LinkedList {
    constructor(){
        this.headNode = null;
        this.tailNode = null;
    }

    append(data){
        if(!this.headNode){
            this.headNode = new Node(data);
        } else {
            let currentNode = this.headNode;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(data);
        };
    }

    prepend(data){
        if(!this.headNode){
            this.headNode = new Node(data);
        } else {
            let currentNodes = this.headNode;
            this.headNode = new Node(data);
            this.headNode.nextNode = currentNodes;
        };
    }

    size(){
        if(!this.headNode){return 0};
        let size = 1;
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
            size++;
        };
        return size;
    }

    head(){
        return this.headNode.data;
    }

    tail(){
        if(!this.headNode){return null};
        let tailNode = null;
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        };
        return currentNode.data;
    }

    at(index){
        //position is one-indexed
        if(!this.headNode){return "List is empty."};

        let listSize = this.size();

        if(index > listSize){
            return `Index is higher than list size, select index from 1 to ${listSize}`;
        };

        let data = null;
        let currentNode = this.headNode;
        let currentPosition = 1;

        while(currentNode){
            if(currentPosition == index){
                data = currentNode.data;
                break;
            };
            currentNode = currentNode.nextNode;
            currentPosition++;
        }

        return data;
    }

    pop(){
        if(!this.headNode){return};
        if(!this.headNode.nextNode){
            this.headNode = null;
            return;
        };

        let currentNode = this.headNode;
        let previousNode = this.headNode;

        while (currentNode) {
            if(!currentNode.nextNode){
                previousNode.nextNode = null;
                break;
            };
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
    }

    contains(value){
        if(!this.headNode){return false};

        let currentNode = this.headNode;
        while (currentNode) {
            if(currentNode.data == value){
                return true;
            };
            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find(value){
        if(!this.headNode){return null};

        let currentNode = this.headNode;
        let currentPosition = 1;

        while (currentNode) {
            if(currentNode.data == value){
                return currentPosition;
            };
            currentNode = currentNode.nextNode;
            currentPosition++;
        }

        return null;
    }

    toString(){
        if(!this.headNode){return null};
        let listString = "";
        let currentNode = this.headNode;

        while(currentNode.nextNode){
            listString += `( ${currentNode.data} ) -> `;
            currentNode = currentNode.nextNode;
        }

        listString += `( ${currentNode.data} ) -> null`;
        return listString;
    }

    insertAt(value, index){
        if(!this.headNode){return};
        if(index < 1){return};

        let previousNode = null;
        let currentNode = this.headNode;

        let currentPosition = 1;

        while(currentNode){
            if(currentPosition == index){
                let newNode = new Node(value);

                newNode.nextNode = currentNode;

                if(!previousNode){
                    this.headNode = newNode;
                }else{
                    previousNode.nextNode = newNode;
                };
                return;
            };

            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentPosition++;
        };
    }

    removeAt(index){
        if(!this.headNode){return};
        if(index < 1){return};

        let previousNode = null;
        let currentNode = this.headNode;

        let currentPosition = 1;

        while(currentNode){
            if(currentPosition == index){

                if(index == 1){
                    this.headNode = currentNode.nextNode;
                } else{
                    previousNode.nextNode = currentNode.nextNode;
                };

                return;
            };

            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentPosition++;
        };
    }
};

export default LinkedList;
