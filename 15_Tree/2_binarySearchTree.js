export default class BinarySearchTree{
    constructor(){
        this._root = null;
    }

    insert(value){
        let thisNode = { left: null, right: null, value: value};
        if(!this._root){
            this._root = thisNode;
        } else{
            let currentRoot = this._root;
            while(true){
                if(currentRoot.value > value){
                    if(currentRoot.left !== null){
                        currentRoot = currentRoot.left;
                    } else{
                        currentRoot.left = thisNode;
                        break;
                    }
                } else if(currentRoot.value < value){
                    if(currentRoot.right !== null){
                        currentRoot = currentRoot.right;
                    } else{
                        currentRoot.right = thisNode;
                        break;
                    }
                } else{
                    break;
                }
            }
        }
    }

    remove(value){
        return deleteRecursively(this._root, value);

        function deleteRecursively(root, value){
            if(!root){
                return null;
            } else if(value < root.value){
                root.left = deleteRecursively(root.left, value);
            } else if(value > root.value){
                root.right = deleteRecursively(root.right, value);
            } else{
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
            return root;
        }

        function findMin(root){
            while(root.left){
                root = root.left;
            }
            return root;
        }
    }

    findNode(value){
        let currentRoot = this._root, found = false;

        while(currentRoot){
            if(currentRoot.value > value){
                currentRoot = currentRoot.left;
            } else if(currentRoot.value < value){
                currentRoot = currentRoot.right;
            } else{
                found = true;
                break;
            }
        }
        return found;
    }
}