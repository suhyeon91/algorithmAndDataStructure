function isSameTree(node1, node2){
    if(node1 == null && node2 == null){
        return true;
    }

    if(node1 == null || node2 == null){
        return false;
    }

    return node1.value === node2.value && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
}

function isSubTree(root, subtree){
    let queue = [];

    if(!root){
        return;
    }

    queue.push(root);
    while(queue.length){
        let temp = queue.shift();
        if(isSameTree(temp, subtree)){
            return true;
        }

        if(root.left){
            queue.push(temp.left, subtree);
        }
        if(root.right){
            queue.push(temp.right, subtree);
        }
    }

    return false;
}


let node = {
    value: 1,
    left: {
        value: 0
    },
    right: {
        value: 3
    }
}

let node2 = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 7,
        left: {
            value: 6
        },
        right: {
            value: 9
        }
    }
}

let node3 = {
    value: 7,
    left: {
        value: 6
    },
    right: {
        value: 9
    }
}