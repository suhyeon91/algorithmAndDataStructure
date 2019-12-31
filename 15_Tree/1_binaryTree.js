class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree{
    constructor(){
        this._root = null;
    }

    traversePreOrder(){
        traversePreOrderHelper(this._root);

        function traversePreOrderHelper(node){
            if(!node){
                return;
            }
            console.log(node.value);
            traversePreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        }
    }

    traverseInOrder(){
        traverseInOrderHelper(this._root);

        function traverseInOrderHelper(node){
            if(!node){
                return;
            }
            traverseInOrderHelper(node.left);
            console.log(node.value);
            traverseInOrderHelper(node.right);
        }
    }

    traversePostOrder(){
        traversePostOrderHelper(this._root);

        function traversePostOrderHelper(node){
            if(node.left){
                traversePostOrderHelper(node.left);
            }
            if(node.right){
                traversePostOrderHelper(node.right);
            }
            console.log(node.value);
        }
    }

    traversePostOrderIterative(){
        let s1 = [], s2 = [];

        s1.push(this._root);

        while(s1.length){
            let node = s1.pop();
            s2.push(node);

            if(node.left){
                s1.push(node.left);
            }
            if(node.right){
                s1.push(node.right);
            }
        }

        while(s2.length){
            let node = s2.pop();
            console.log(node.value);
        }
    }

    traverseLevelOrder(){
        let root = this._root, queue = [];

        if(!root){
            return;
        }

        queue.push(root);

        while(queue.length){
            let temp = queue.shift();
            console.log(temp.value);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }   
        }
    }
}