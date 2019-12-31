class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    insert(value){
        if(this.head === null){
            this.head = new Node(value);
        } else{
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        this.size++;
    }

    remove(value){
        let currentHead = this.head;
        if(currentHead.data === value){
            this.head = currentHead.next;
            this.size--;
        } else{
            let prev = currentHead;
            while(currentHead.next){
                if(currentHead.value === value){
                    prev.next = currentHead.next;
                    prev = currentHead;
                    currentHead = currentHead.next;
                    break;
                }
                prev = currentHead;
                currentHead = currentHead.next;
            }

            if(currentHead.data === value){
                prev.next = null;
            }
            this.size--;
        }
    }

    deleteAtHead(){
        let toReturn = null;
        
        if(this.head){
            toReturn = this.head.data;
            this.head = this.head.next;
            this.size--;
        }
        return toReturn;
    }

    find(value){
        let currentHead = this.head;
        if(currentHead.data === value){
            return true;
        }

        while(currentHead.next){
            if(currentHead.data === value){
                return true;
            }
            currentHead = currentHead.next;
        }
        return false;
    }

    reverse(){
        let node = this.head;
        let prev = null;
        while(node){
            let temp = node.next;
            node.next = prev;
            prev = node;
            if(!temp){
                break;
            }
            node = temp;
        }
        return node;
    }

    deleteDuplicateInUnsortedSll(sll1){
        let track = [];
        let temp = sll1.head;
        let prev = null;
        while(temp){
            if(track.indexOf(temp.data) >= 0){
                prev.next = temp.next;
                sll1.size--;
            } else{
                track.push(temp.data);
                prev = temp;
            }
            temp = tempnext;
        }
        console.log(temp);
    }
}

var sll1 = new SinglyLinkedList();

function deleteDuplicateInUnsortedSll(sll){
    let track = [];

    let node = sll.head;
    let prev = null;

    while(node){
        if(track.indexOf(node.data) !== -1){
            prev.next = node.next;
            sll.size--;
        } else{
            track.push(node.data);
            prev = node;
        }
        node = node.next;
    }
    return node;
}