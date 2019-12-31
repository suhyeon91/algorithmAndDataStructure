class AVLTree{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.depth = 1;
    }

    setDepthBasedOnChildren(){
        if(!this.node){
            this.depth = 0;
        } else{
            this.depth = 1;
        }

        if(this.left !== null){
            this.depth = this.left.depth + 1;
        }

        if(this.right !== null && this.depth <= this.right.depth){
            this.depth = this.right.depth + 1;
        }
    }

    rotateLL(){
        let valueBefore = this.value;
        let rightBefore = this.right;
        this.value = this.left.value;

        this.right = this.left;
        this.left = this.left.left;
        this.right.right = rightBefore;
        this.right.value = valueBefore;

        this.right.setDepthBasedOnChildren();
        this.setDepthBasedOnChildren();
    }

    rotateRR(){
        // the right side is too long => rotate from the right (_not_ rightwards)
        var valueBefore = this.value;
        var leftBefore = this.left;
        this.value = this.right.value;

        this.left = this.right;         
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;

        this.left.setDepthBasedOnChildren();
        this.setDepthBasedOnChildren();
    }

    balance(){
        let ldepth = this.left == null ? 0 : this.left.depth;
        let rdepth = this.right == null ? 0 : this.right.depth;

        if(ldepth > rdepth + 1){
            //LR or LL회전
            let lldepth = this.left.left == null ? 0 : this.left.left.depth;
            let lrdepth = this.left.right == null? 0 : this.left.right.depth;

            if(lldepth < lrdepth){
                //LR 회전은 왼쪽 자식의 RR 회전과 현재 노드의 LL 회전으로 구성된다.
                this.left.rotateRR();
                //현재 노드의 LL회전은 무조건 일어난다.
            }
            this.rotateLL();
        } else if(ldepth + 1 < rdepth){
            //RR 혹은 RL회전
            let rrdepth = this.right.right == null ? 0 : this.right.right.depth;
            let rldepth = this.right.left == null ? 0 : this.right.left.depth;

            if(rldepth > rrdepth){
                //RR회전은 오른쪽 자식의 LL 회전과 현재 노드의 RR 회전으로 구성된다.
                this.right.rotateLL();
                //현재 노드의 RR회전은 무조건 일어난다.
            }
            this.rotateRR();
        }
    }

    insert(value){
        let childInserted = false;
        if(value === this.value){
            return false; //중복값 허용 x
        } else if(value < this.value){
            if(this.left === null){
                this.left = new AVLTree(value);
                childInserted = true;
            } else{
                childInserted = this.left.insert(value);
                if(childInserted){
                    this.balance();
                } 
            }
        } else if(value > this.value){
            if(this.right === null){
                this.right = new AVLTree(value);
                childInserted = true;
            } else {
                childInserted = this.right.insert(value);
                if(childInserted){
                    this.balance();
                }
            }
        }

        if(childInserted){
            this.setDepthBasedOnChildren();
        }
        return childInserted;
    }

    remove(value){
        return deleteRecursively(this, value);

        function deleteRecursively(root, value){
            if(!root){
                return null;
            } else if(value < root.value){
                root.left = deleteRecursively(root.left, value);
            } else if(value > root.value){
                root.right = deleteRecursively(root.right, value);
            } else{
                //자식 노드x
                if(!root.left && !root.right){
                    return null;
                } else if(!root.left){
                    root = root.right;
                    return root;
                } else if(!root.right){
                    root = root.left;
                    return root;
                } else{
                    let temp = findMin(root.right);
                    root.value = temp.value;
                    root.right = deleteRecursively(root.right, temp.value);
                    return root;
                }
            }
            root.setDepthBasedOnChildren();
            return root;
        }
        function findMin(root){
            while(root.left){
                root = root.left;
            }
            return root;
        }
    }
}