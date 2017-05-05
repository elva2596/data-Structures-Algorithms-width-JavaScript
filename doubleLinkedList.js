function Node(ele){
    this.element = ele;
    this.previous  = null;
    this.next=  null;
}
function DoubleLink(){
    this.head  = null;
}
//初始化双向链表
DoubleLink.prototype.initialLink = function (){
    this.head = new Node("head")
};
/*
        插入法分三种情况：
            1.在双向链表的第一个结点(头结点后面的结点)前插入
            2.在双向链表的最后一个结点后插入
            3.在双向链表的中间插入

         【1 2两种情况处理相同】:
                1、newNode.previous = p(当前找到的结点)
                   newNode.next = p.next
                2、判断当前找到的结点是否有后继元素，如果有则不是最后一个元素，那么
                   p.next.previous = newNode
                4.p.next = newNode
 */
DoubleLink.prototype.insert = function (position,element){
    var newNode = new Node(element),
        p = this.head,
        j=1;
    while(p&&j<position){
        p = p.next;
        j++;
    }
    if(!p||j>position){
        throw new Error("error")
    }
    //在双向链表的最后一个结点后面插入元素的情况
    newNode.previous = p;
    newNode.next = p.next;
    if(p.next){
        p.next.previous = newNode
    }
    p.next = newNode;


};
//查找双向链表的最后一个结点
DoubleLink.prototype.findLastNode = function (){
    var p = this.head;
    while(p.next){
        p=p.next;
    }
    return p;
};
DoubleLink.prototype.indexOf = function (element){
    if(this.length()===0){
        throw new Erro("这是空链表");
    }
    var p = this.head.next,
        i=0;
    while(p){
        i++;
        if(p.element==element){
            return i;
        }
        p = p.next;
    }
    return -1;
};
//正向链表输出元素
DoubleLink.prototype.traverse = function (){
    var p = this.head.next;
    var arr  =[];
    while(p){
        arr.push(p.element);
        p=p.next
    }
    console.log(`正向遍历双向链表的元素= ${arr.join(' ')}`)
};
//反向链表输出元素
DoubleLink.prototype.reverseTraverse = function (){
    var p = this.findLastNode();
    var arr  =[];
    while(p){
        if(p!=this.head){
            arr.push(p.element);
        }
        p=p.previous;

    }
    console.log(`反向遍历双向链表的元素= ${arr.join(' ')}`);
};
//双向链表的长度
DoubleLink.prototype.length = function (){
    var i=0,
        p=this.head;
    while(p.next){
        i++;
        p=p.next
    }
    return i
};
/*
        根据位置删除结点注意事项:
            要注意最后一个结点的删除：
                如果删除的结点等于双向链表的尾结点，
                    则q = p.next,q.next.previous = null,p.next = null
                    否则:q= p.next,q.next.previous = p,p.next = q.next
 */
DoubleLink.prototype.removeAt = function (position){
    var p = this.head,
        i=1;
    while(p.next&&i<position){
        i++;
        p = p.next;
    }
    if(!p.next||i>position){
        return 'error';
    }
    //如果删除的是最后一个结点(p.next)
    if(p.next===this.findLastNode()){
        var q = p.next;
        q.previous = null;
        p.next= null;
        return q.element;
    }else{
        var q = p.next;
        p.next = q.next;
        q.next.previous = p;
        return q.element;
    }

};
/*
    【单链表和双向链表小结】:
        1.插入和删除操作都需要先查找操作的位置，插入操作(查找插入位置的前一个元素p),删除操作(查找删除的元素的位置p.next)
        2.双向链表的Node结点多一个previous指针
        3.双向链表在进行插入操作的时候多一个判断是否在最后一个结点后插入(空链表在第一个位置插入，非空链表在最后一个结点后插入)
           如果是，则 newNode.previous = p;
                     newNode.next = p.next;
                     p.next = newNode,

                  否则newNode.previous = p;
                  newNode.next = p.next;
                  p.next.previous =newNode;
                  p.next = newNode,
        4.删除操作的时候多一个判断删除的结点是否是非空链表的最后一个结点
            如果是 q = p.next;
                   q.previous = null
                   p.next = null
            否则: q=p.next;
                  q.next.previous = p
                  p.next = q.next;
 */
const doubleLink =new DoubleLink();
doubleLink.initialLink();
doubleLink.insert(1,"A");
console.log(`在双向链表的第一个位置插入一个A以后`)
doubleLink.traverse();
doubleLink.reverseTraverse();
console.log(`双向链表的长度= ${doubleLink.length()}`);
const index = doubleLink.indexOf("A")
console.log(`A元素在链表中的索引值= ${index}`);
doubleLink.insert(2,"B");
console.log(`在双向链表的第二个位置插入一个B以后`)
doubleLink.traverse();
doubleLink.reverseTraverse();
doubleLink.insert(1,"C");
console.log(`在双向链表的第一个位置插入一个C以后`)
doubleLink.traverse();
doubleLink.reverseTraverse();//????
console.log(`链表的长度= ${doubleLink.length()}`)
const ele = doubleLink.removeAt(3);
console.log(`在链表的第三个位置删除节点以后，删除的节点数据值= ${ele}, 链表的长度=  ${doubleLink.length()}`)
doubleLink.traverse()
doubleLink.insert(2,"D");
doubleLink.insert(2,"E");
doubleLink.traverse();
// console.log(`尾结点= ${doubleLink.tail.element}`)
const ele2 =doubleLink.removeAt(2)
console.log(`在链表的第二个位置删除节点以后，删除的节点数据值= ${ele2}, 链表的长度=  ${doubleLink.length()}`)
// console.log(`尾结点= ${doubleLink.tail.element}`)
doubleLink.traverse();
doubleLink.reverseTraverse()