//LFU(Low Frequency Use: 최소 빈도 사용)
//운영체제가 메모리를 관리하기 위해 사용하는 캐싱 알고리즘
//운영체제는 어떤 블록이 메모리에서 참조된 횟수를 관리한다.
//설계상 캐시가 자신의 한계를 초과하는 경우 운영체계는 가장 참조 빈도가 낮은 항목을 샂게한다.
//LFU를 가장 쉽게 구현하는 방법은 캐시에 로딩되는 모든 블록에 카운터를 할당한 후 해당 블록에 대한 참조가 생성될때마다 카운터를 증가시키는거시다.


class LFUNode{
  constructor(key, value){
    this.prev = null;
    this.next = null;
    this.key = key;
    this.value = value;
    this.freqCont = 1;
  }
}

class LFUDoublyLinkedList{
  constructor(){
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  insertAtHead(node){
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
  }
  
  removeAtTail(){
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
  }
}

class LFUCache{
  constructor(capacity){
    this.keys = {};
    this.freq = {};
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
  }
}