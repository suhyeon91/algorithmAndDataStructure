class TrieNode{
    constructor(){
        this.children = {}; //표
        this.endOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let current = this.root;
        for(let i = 0, iLength = word.length; i< iLength; i++){
            let ch = word.charAt(i);
            let node = current.children[ch];

            if(!node){
                node = new TrieNode();
                current.children[ch] = node;
            }
            current = node;
        }
        current.endOfWord = true;
    }

    search(word){
        let current = this.root;
        for(let i = 0, iLength = word.length; i< iLength; i++){
            let ch = word.charAt(i);
            let node = current.children[ch];

            if(!node){
                return false;
            }
            current = node;
        }
        return current.endOfWord;
    }

    delete(word){
        this.deleteRecursively(this.root, word, 0);
    }

    deleteRecursively(current, word, index){
        if(index === word.length){
            if(!current.endOfWord){
                return false;
            }
            current.endOfWord = false;
            return Object.keys(current.children).length === 0;
        }
        let ch = word.charAt(index), node = current.children[ch];
        if(!node){
            return false;
        }

        let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

        if(shouldDeleteCurrentNode){
            delete current.children[ch];
            return Object.keys(current.children).length === 0;
        }
        return false;
    }
}

let trie = new Trie();
trie.insert('sammie');
trie.insert('sia');
trie.insert('simran');
trie.insert('sam');