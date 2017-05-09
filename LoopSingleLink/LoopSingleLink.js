class Node{
    constructor(ele){
        this.element  =ele;
        this.next  =null;
    }
}

class LoopSingleLink{
    constructor(){
        this.head = null;
        this.rear = null;
    }
    initialLink(){
        this.head =  this.rear = new Node("head");
        this.head.next = this.head;
    }

    insert(position){
        var p  =this.head,
            q = this.rear,
            j=1;
        while (p.next!=p&&j<position){

        }
    }
}
const ar = new LoopSingleLink()


