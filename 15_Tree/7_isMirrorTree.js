function isMirrorTrees(tree1, tree2){
    if(!tree1 && !tree2){
        return true;
    }
    if(!tree1 || !tree2){
        return false;
    }

    let leftSameCheck = isMirrorTrees(tree1.left, tree2.right);
    let rightSameCheck = isMirrorTrees(tree1.right, tree2.left);

    return tree1.value === tree2.value && leftSameCheck && rightSameCheck;
}

let node1 = {
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

let node2 = {
    value: 5,
    left: {
        value: 7,
        left: {
            value: 9
        },
        right: {
            value: 6
        }
    },
    right: {
        value: 3,
        left: {
            value: 4
        },
        right: {
            value: 2
        }
    }
}

let node3 = {
    value: 5,
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