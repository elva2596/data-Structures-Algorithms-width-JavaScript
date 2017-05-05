
/*
    链表包含两个类：
        1.Node类用来表示节点
        2.LinkedList类用来初始化链表，以及其他的一些操作链表的方法
 */

/*
    Node节点类组成：
        1.存放数据元素的数据域：element
        2.存放后继结点地址的指针域:next
 */
function Node(element){
    this.element = element;
    this.next  =null;
}
/*
    LinkedList类提供了
           1.头结点:head
           2.对链表操作的方法(放在原型上)

 */
function LinkedList(){
    this.head = null;
}
/*
    初始化空链表，产生头结点，并让头结点指针域为空
 */
LinkedList.prototype.initialList = function (){
    this.head = new Node("head")
};


//遍历链表并且输出链表中元素
LinkedList.prototype.traverse = function (){
    if(this.listLength()===0){
        console.log("链表为空")
        return
    }
    var p = this.head.next,
        arr = [];
    while (p){
        arr.push(p.element)
        p=p.next;
    }
    console.log(`链表的所有数据元素= ${arr.join(" ")}`)
};
/*
        获取单链表中第position个数据(position是从1算起的);
        算法思路:
            1.声明一个结点p指向链表的第一个结点(头结点后面的结点叫第一个结点)，初始化j从1开始
            2.当j<position的时候，遍历链表，让p的指针后裔，不断指向下一个结点，j累加
            3.若链表遍历到结尾p为空(position大于链表长度的情况)或position小于1，则说明第position个元素不存在，
            4.否则查找成功，并返回结点p的数据
 */
LinkedList.prototype.getElement = function (position){
            var j=1,
                p = this.head.next;
            while(p&&j<position){
                p=p.next;
                ++j;
            }
            /*
                position有三种情况:
                    1.position小于1
                    2.position大于链表的长度
                    3.1≤position≤ListLength(L)
             */
            if(!p||j>position){
                return `error`
            }
            return p.element
};
//获取链表的长度;【注：头结点是不算在链表长度内的】
LinkedList.prototype.listLength = function (){
    var i=0,
        p = this.head.next;
    while(p){
        i++;
        p=p.next;
    }
    return i;
};
/*
    获取链表中第与e相等的元素的第1个位置并且返回；

 */
LinkedList.prototype.indexOf= function (e){
    var p  = this.head.next,
        j=0;
    while(p){
        j++;
        if(p.element===e){
            return j;
        }
        p = p.next;
    }
        return -1
};
/*
        插入结点(前提是先找到插入点，再从这一位置前插入新结点);【末尾的位置也可以插入】
        插入结点算法:
            1.声明一个结点p指向链表的头结点，初始化j=1
            2.当j<i时，就遍历链表，让p的指针向后移，不断指向下一个结点,j累加1
            3.当遍历到结点的末尾p为空,或者position小于1，则说明第position位置的元素不存在
            4.否则创建一个新节点q，将element赋值给q的数据域
            5.q.next = p.next;p.next = q;

 */
LinkedList.prototype.insert = function (position,element){
    var p = this.head,
        j=1,
        newNode;
        while(p&&j<position){
            p=p.next;
            j++;
        }
        if(!p||j>position){
            throw  new Error('error')
        }
        q = new Node(element);
        q.next = p.next;
        p.next= q;
};
/*
    删除链表中某个位置的元素
        删除结点算法思路:
            1.声明结点p指向链表的第一个元素，初始化j=1
            2.当j<position,则让p循环指向下一个结点，并使j++
            3.当遍历到链表的末尾(position大于链表长度的情况)或者(position小于1)的情况下，则第position个位置的元素不存在
            4.否则查找成功，将欲删除的结点p.next赋值给q
            5.p.next = q.next
            6.返回删除结点(q==p.next)的element
 */
LinkedList.prototype.removeAt = function (position){
        var p = this.head,
            j = 1;
        //p.next作为判断条件避免了当链表只有一个头结点时，还要进行删除操作
        while(p.next&&j<position){
            p = p.next;
            j++;
        }
        if(!p.next||j>position){
            throw  new Error('error')
        }
        var q = p.next;
        p.next = q.next;
        return q.element
};

//清空链表
LinkedList.prototype.clearList = function (){
    if(this.listLength()===0){
        console.log("链表已为空")
        return
    }
    this.head.next = null;
};
//判断链表是否为空
LinkedList.prototype.isEmpty = function (){
    if(this.listLength()===0){
        return true
    }else{
        return false
    }
};
/*
    头插法插入结点
        算法思路:
            1.声明一个结点p指向头结点
            2.创建一个结点q
            3.q.next = p.next
            4.p.next = q
 */
LinkedList.prototype.insertFromHead = function (element){
    var p = this.head,
        q = new Node(element);
    q.next = p.next;
    p.next = q

};
/*
    尾插法
        算法思路:
            1.声明一个结点p指向头结点
            2.遍历结点找到链表中的尾结点(p.next)
            3.创建一个新节点q,p.next = qu
 */
LinkedList.prototype.insertFromEnd = function (element){
    var p = this.head;
    while (p.next){
        p = p.next
    }
    var q = new Node(element);
    p.next = q;
}
var linkList = new LinkedList();
linkList.initialList();//初始化列表
linkList.insert(1,"A");//第一个位置插入一个节点，数据域等于A
console.log(`在第一个位置插入元素A以后链表的长度=${linkList.listLength()}`);
linkList.insert(1,"B");//第一个位置插入一个节点，数据域等于B
console.log(`在第一个位置插入元素B以后链表的长度=${linkList.listLength()}`);

for(var i=2;i<=7;i++){
    linkList.insert(i,i);
    console.log(`在第${i}个位置插入元素${i}以后链表的长度=${linkList.listLength()}`);
}

linkList.traverse();
console.log(`链表中第9个位置的数据=${linkList.getElement(9)}`);
const loc1 = linkList.indexOf("cc");
console.log(`数据域等于cc的结点在链表中的位置= ${loc1}`);
const loc2 = linkList.indexOf("B");
console.log(`数据域等于B的结点在链表中的位置= ${loc2}`);
const ele = linkList.removeAt(1);
console.log(`删除的第1个元素以后链表的长度=${linkList.listLength()};删除元素等于${ele}`);
let flag = linkList.isEmpty();
console.log(`链表是否为空？${flag}(true:空 false:不为空)`);
linkList.clearList();
console.log(`清空链表后，链表的长度= ${linkList.listLength()}`);
flag = linkList.isEmpty();
console.log(`链表是否为空？${flag}(true:空 false:不为空)`);

linkList.insertFromHead("A");
linkList.insertFromHead("B");
console.log(`使用头插法插入两个元素以后，链表的元素= `);
linkList.traverse();

linkList.insertFromEnd ("C");
console.log(`使用尾插法插入一个元素以后，链表的元素= `);
linkList.traverse();
linkList.insert(4,"D");
linkList.traverse();
linkList.insert(1,"M");
linkList.traverse();
