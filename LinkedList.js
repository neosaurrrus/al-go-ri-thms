https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/learn/v4/t/lecture/5960346?start=0
//Define Linked List
function LinkedList(){
    this.head = null; 
    this.tail = null;
};
//Define Node
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
};


//Define Add Node to Head Method;
LinkedList.prototype.addToHead = function(value){ 
    var newNode = new Node(value, this.head, null); //makes the next Node 
    if(this.head) this.head.prev = newNode; //If there is items in the list -> point Old head to New Head
    else this.tail = newNode;                //Else  -> the list's tail is the New Head

    this.head = newNode;                    //Make the new head node.
};

//Define Add Node to Head Method, reverse of add to head

LinkedList.prototype.addToTail = function(value){ 
    var newNode = new Node(value, null, this.tail); //makes the next Node 
    if(this.tail) this.tail.next = newNode;         //If there is items in the list -> point Old head to New Head
    else this.head = newNode;                       //Else  -> the list's tail is the New Head
    this.tail = newNode;                            //Make the new head node.
};
// Define Remove Head function
LinkedList.prototype.removeHead = function(){
    if(!this.head) return null //if there isnt a head
    var value = this.head.value;          //get the value
    this.head = this.head.next;           //make the next node the Head
    if (this.head) this.head.prev = null; //If the head exists -> remove the New Heads reference to the Old Head
    else this.tail = null                 //else -> the list must be empty so it cant have a tail
    return value;
};
LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null
    var value = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null
    else this.head = null;
    return value;
};
LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;   //starting point
    while(currentNode) {
        if (currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next;
    };
    return null
};
LinkedList.prototype.indexOf = function(value){   //returns the index of where a valeu occurs.
    var indexArray = [];
    var currentNode = this.head;
    var counter = 0;
    while(currentNode){
        if(currentNode.value === value) indexArray.push(counter);
        currentNode = currentNode.next;
        counter++ 
    };
    return indexArray;
};

//Create New Linked List
var ll = new LinkedList();

ll.addToHead(200);
ll.addToHead(200);
ll.addToTail(100);
ll.addToTail(100);
console.log(ll.removeTail());
console.log(ll.search(100));
console.log(ll.indexOf(100));

console.log(ll)
