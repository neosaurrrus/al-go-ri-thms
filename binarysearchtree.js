
function BST(value){   //BST Simple Constructor function
    this.value = value
    this.left = null;
    this.right = null;
};

BST.prototype.insert = function(value){ //Insert Method - To effeciently add a new BST in the right location.
    if (value <= this.value){
        if (!this.left) this.left = new BST(value)
        else this.left.insert(value)
    } else if (value >this.value) {
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value)
    }
};

BST.prototype.contains = function(value){ //Contains Method - To efficiently determine if a value exists in the tree 
    if (value === this.value) return true;
        if (value < this.value) {
            if(!this.left) return false;
            else return this.left.contains(value);
        }
        else if (value > this.value) {
            if(!this.right) return false;
            else return this.right.contains(value);
        };
}

BST.prototype.depthFirstTraversal = function(iteratorFunction, order){ //runs a function on each of the nodes
    if (order === "preOrder") iteratorFunction(this.value); 
    if(this.left){this.left.depthFirstTraversal(iteratorFunction, order)}
    if(order === "inOrder")iteratorFunction(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunction, order);
    if (order === "postOrder") interatorFunction(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunction, order){ //runs a function, Level by Level
    var queue = [this]; //A list that follows first in , first out - QUEUE
    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunction(treeNode);
        if (treeNode.left) queue.push (treeNode.left);
        if (treeNode.right) queue.push (treeNode.right);
    }
};
BST.prototype.getMinVal = function(){
    console.log(this.value)
    if(this.left) {return this.left.getMinVal()}
    else {return this.value};
};  


BST.prototype.getMaxVal = function(){
    console.log(this.value)
    if(this.right) {return this.right.getMaxVal()}
    else {return this.value};
};  

//Testing

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.contains(45));
console.log(bst.contains(15));

bst.depthFirstTraversal(log, "preOrder");
bst.breadthFirstTraversal(log);

console.log(bst.getMinVal());
console.log(bst.getMaxVal());

function log(node){
    console.log("Traversal:" + node.value);
};
console.log(bst)
console.log(bst.left.right.left)
