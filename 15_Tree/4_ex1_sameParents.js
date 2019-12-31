//주어진 이진 트리에서 두 개의 노드의 가장 가까운 공통 조상 찾기

import Tree from './2_binarySearchTree.js';

const node = new Tree(4);

function findLowestCommonAncestor(node, val1, val2){
    
    function findLowestCommonAncestorHelper(node, val, val2){
        if(!node){
            return;
        } else if(Math.max(val1, val2) < node.val){
            findLowestCommonAncestorHelper(node.left, val1, val2);
        } else if(Math.min(val1, val2) > node.val){
            findLowestCommonAncestorHelper(node.right, val1, val2);
        } 
        return node.value;
    }
    return findLowestCommonAncestorHelper(node, val1, val2);
}